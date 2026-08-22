import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReviewForm from './ReviewForm';
import { submitReview } from './api';
import i18n from '../../../translations/i18n';

jest.mock('./api');

beforeAll(async () => {
  await i18n.changeLanguage('en');
});

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

test('shows a success confirmation after a successful submit', async () => {
  submitReview.mockResolvedValueOnce({ id: '1', name: 'Priya', rating: 4, text: 'Great work.' });

  render(<ReviewForm onSubmitted={() => {}} />);

  fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Priya' } });
  fireEvent.change(screen.getByPlaceholderText('Write your review...'), { target: { value: 'Great work.' } });
  fireEvent.click(screen.getByText('Submit Review'));

  const status = await screen.findByRole('status');
  expect(status).toHaveTextContent("Thanks — your review is live.");
});

test('the rating control exposes radio semantics with filled/empty glyphs', () => {
  render(<ReviewForm onSubmitted={() => {}} />);

  const radios = screen.getAllByRole('radio');
  expect(radios).toHaveLength(5);

  // default rating is 5: all five stars are filled, but only the 5th is the checked radio
  radios.forEach((radio, index) => {
    expect(radio).toHaveTextContent('★');
    expect(radio).toHaveAttribute('aria-checked', index === 4 ? 'true' : 'false');
  });

  fireEvent.click(screen.getByLabelText('2 stars'));

  // rating is now 2 (star index 1): stars 1-2 filled, only star 2 is the checked radio
  const updatedRadios = screen.getAllByRole('radio');
  expect(updatedRadios[0]).toHaveTextContent('★');
  expect(updatedRadios[0]).toHaveAttribute('aria-checked', 'false');
  expect(updatedRadios[1]).toHaveTextContent('★');
  expect(updatedRadios[1]).toHaveAttribute('aria-checked', 'true');
  expect(updatedRadios[2]).toHaveTextContent('☆');
  expect(updatedRadios[2]).toHaveAttribute('aria-checked', 'false');
  expect(updatedRadios[4]).toHaveTextContent('☆');
  expect(updatedRadios[4]).toHaveAttribute('aria-checked', 'false');
});
