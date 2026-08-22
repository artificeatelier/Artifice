import { fetchReviews, submitReview } from './api';

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test('fetchReviews calls the reviews endpoint with skip/limit and returns parsed body', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ items: [{ id: '1', name: 'Priya', rating: 5, text: 'Great' }], hasMore: false }),
  });

  const result = await fetchReviews({ skip: 0, limit: 6 });

  expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/reviews?skip=0&limit=6'));
  expect(result.items).toHaveLength(1);
  expect(result.hasMore).toBe(false);
});

test('fetchReviews throws when the response is not ok', async () => {
  global.fetch.mockResolvedValueOnce({ ok: false, json: async () => ({}) });
  await expect(fetchReviews()).rejects.toThrow();
});

test('submitReview posts JSON body and returns the saved review', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ id: '2', name: 'Rahul', rating: 4, text: 'Nice' }),
  });

  const result = await submitReview({ name: 'Rahul', rating: 4, text: 'Nice' });

  expect(global.fetch).toHaveBeenCalledWith(
    expect.stringContaining('/api/reviews'),
    expect.objectContaining({ method: 'POST' })
  );
  expect(result.name).toBe('Rahul');
});

test('submitReview throws with server error message on failure', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({ errors: ['Rating must be between 1 and 5.'] }),
  });
  await expect(submitReview({ name: 'X', rating: 9, text: 'Y' })).rejects.toThrow(
    'Rating must be between 1 and 5.'
  );
});
