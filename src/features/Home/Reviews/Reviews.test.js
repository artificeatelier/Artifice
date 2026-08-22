import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Reviews from './Reviews';
import { fetchReviews, submitReview } from './api';

jest.mock('./api');

afterEach(() => {
  jest.resetAllMocks();
});

test('fetches and displays reviews on mount', async () => {
  fetchReviews.mockResolvedValueOnce({
    items: [{ id: '1', name: 'Priya', rating: 5, text: 'Great work.' }],
    hasMore: false,
  });

  render(<Reviews />);

  await waitFor(() => expect(screen.getByText(/Priya/)).toBeInTheDocument());
  expect(fetchReviews).toHaveBeenCalledWith({ skip: 0, limit: 6 });
});

test('submitting the form prepends the new review without refetching', async () => {
  fetchReviews.mockResolvedValueOnce({
    items: [{ id: '1', name: 'Priya', rating: 5, text: 'Great work.' }],
    hasMore: false,
  });
  submitReview.mockResolvedValueOnce({ id: '2', name: 'Rahul', rating: 4, text: 'Nice.' });

  render(<Reviews />);
  await waitFor(() => expect(screen.getByText(/Priya/)).toBeInTheDocument());

  fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Rahul' } });
  fireEvent.change(screen.getByPlaceholderText('Write your review...'), { target: { value: 'Nice.' } });
  fireEvent.click(screen.getByText('Submit Review'));

  await waitFor(() => expect(screen.getByText(/Rahul/)).toBeInTheDocument());
  expect(fetchReviews).toHaveBeenCalledTimes(1); // no refetch after submit
});

test('clicking Load More fetches the next page and appends results', async () => {
  fetchReviews
    .mockResolvedValueOnce({ items: [{ id: '1', name: 'Priya', rating: 5, text: 'Great' }], hasMore: true })
    .mockResolvedValueOnce({ items: [{ id: '2', name: 'Rahul', rating: 4, text: 'Nice' }], hasMore: false });

  render(<Reviews />);
  await waitFor(() => expect(screen.getByText(/Priya/)).toBeInTheDocument());

  fireEvent.click(screen.getByText(/load more reviews/i));

  await waitFor(() => expect(screen.getByText(/Rahul/)).toBeInTheDocument());
  expect(fetchReviews).toHaveBeenNthCalledWith(2, { skip: 1, limit: 6 });
});
