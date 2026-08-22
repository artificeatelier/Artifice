import { render, screen } from '@testing-library/react';
import ReviewCard from './ReviewCard';
import i18n from '../../../translations/i18n';

beforeAll(async () => {
  await i18n.changeLanguage('en');
});

test('renders name, text, and rating as stars', () => {
  render(<ReviewCard name="Priya S." rating={4} text="Great work." />);
  expect(screen.getByText(/Priya S\./)).toBeInTheDocument();
  expect(screen.getByText(/Great work\./)).toBeInTheDocument();
  expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument();
});

test('shows the original text when it is already in the current language', async () => {
  await i18n.changeLanguage('en');
  render(
    <ReviewCard
      name="Priya S."
      rating={4}
      text="Great work."
      translatedText="Excellent travail."
      sourceLang="en"
    />
  );
  expect(screen.getByText(/Great work\./)).toBeInTheDocument();
  expect(screen.queryByText(/Excellent travail\./)).not.toBeInTheDocument();
});

test('shows the translated text when the original is in the other language', async () => {
  await i18n.changeLanguage('fr');
  render(
    <ReviewCard
      name="Priya S."
      rating={4}
      text="Great work."
      translatedText="Excellent travail."
      sourceLang="en"
    />
  );
  expect(screen.getByText(/Excellent travail\./)).toBeInTheDocument();
  expect(screen.queryByText(/Great work\./)).not.toBeInTheDocument();
  await i18n.changeLanguage('en');
});

test('falls back to the original text when no translation is available', async () => {
  await i18n.changeLanguage('fr');
  render(<ReviewCard name="Priya S." rating={4} text="Great work." />);
  expect(screen.getByText(/Great work\./)).toBeInTheDocument();
  await i18n.changeLanguage('en');
});
