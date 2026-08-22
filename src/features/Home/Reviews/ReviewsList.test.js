import { render, screen, fireEvent } from '@testing-library/react';
import ReviewsList from './ReviewsList';

const sample = [
  { id: '1', name: 'Priya', rating: 5, text: 'Great' },
  { id: '2', name: 'Rahul', rating: 4, text: 'Nice' },
];

test('shows a loading message while loading', () => {
  render(<ReviewsList reviews={[]} hasMore={false} onLoadMore={() => {}} loading={true} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('shows an empty message when there are no reviews', () => {
  render(<ReviewsList reviews={[]} hasMore={false} onLoadMore={() => {}} loading={false} />);
  expect(screen.getByText(/no reviews yet/i)).toBeInTheDocument();
});

test('renders one card per review', () => {
  render(<ReviewsList reviews={sample} hasMore={false} onLoadMore={() => {}} loading={false} />);
  expect(screen.getByText(/Priya/)).toBeInTheDocument();
  expect(screen.getByText(/Rahul/)).toBeInTheDocument();
});

test('shows Load More button when hasMore is true and calls onLoadMore on click', () => {
  const onLoadMore = jest.fn();
  render(<ReviewsList reviews={sample} hasMore={true} onLoadMore={onLoadMore} loading={false} />);
  fireEvent.click(screen.getByText(/load more reviews/i));
  expect(onLoadMore).toHaveBeenCalledTimes(1);
});

test('hides Load More button when hasMore is false', () => {
  render(<ReviewsList reviews={sample} hasMore={false} onLoadMore={() => {}} loading={false} />);
  expect(screen.queryByText(/load more reviews/i)).not.toBeInTheDocument();
});
