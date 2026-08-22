import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReviewForm from './ReviewForm';
import { submitReview } from './api';

jest.mock('./api');

afterEach(() => {
  jest.resetAllMocks();
});

test('submits name, rating, and text, then calls onSubmitted and clears the form', async () => {
  submitReview.mockResolvedValueOnce({ id: '1', name: 'Priya', rating: 4, text: 'Great work.' });
  const onSubmitted = jest.fn();

  render(<ReviewForm onSubmitted={onSubmitted} />);

  fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Priya' } });
  fireEvent.click(screen.getByLabelText('4 stars'));
  fireEvent.change(screen.getByPlaceholderText('Write your review...'), { target: { value: 'Great work.' } });
  fireEvent.click(screen.getByText('Submit Review'));

  await waitFor(() => expect(onSubmitted).toHaveBeenCalledWith({ id: '1', name: 'Priya', rating: 4, text: 'Great work.' }));
  expect(submitReview).toHaveBeenCalledWith({ name: 'Priya', rating: 4, text: 'Great work.' });
  expect(screen.getByPlaceholderText('Your name').value).toBe('');
});

test('shows an error message when submission fails', async () => {
  submitReview.mockRejectedValueOnce(new Error('Text must be 500 characters or fewer.'));

  render(<ReviewForm onSubmitted={() => {}} />);

  fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Priya' } });
  fireEvent.change(screen.getByPlaceholderText('Write your review...'), { target: { value: 'x' } });
  fireEvent.click(screen.getByText('Submit Review'));

  await waitFor(() => expect(screen.getByText('Text must be 500 characters or fewer.')).toBeInTheDocument());
});
