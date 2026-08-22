const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5216';

if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_API_BASE_URL) {
  console.error('REACT_APP_API_BASE_URL is not set — the reviews API will not work in production.');
}

export const DEFAULT_PAGE_SIZE = 6;

export async function fetchReviews({ skip = 0, limit = DEFAULT_PAGE_SIZE } = {}) {
  const res = await fetch(`${API_BASE_URL}/api/reviews?skip=${skip}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Could not load reviews.');
  }
  return res.json();
}

export async function submitReview({ name, rating, text }) {
  const res = await fetch(`${API_BASE_URL}/api/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, rating, text }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = (data.errors && data.errors.join(' ')) || data.message || 'Something went wrong.';
    throw new Error(message);
  }
  return data;
}
