import { render, screen } from '@testing-library/react';
import ReviewCard from './ReviewCard';

test('renders name, text, and rating as stars', () => {
  render(<ReviewCard name="Priya S." rating={4} text="Great work." />);
  expect(screen.getByText(/Priya S\./)).toBeInTheDocument();
  expect(screen.getByText(/Great work\./)).toBeInTheDocument();
  expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument();
});
