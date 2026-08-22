import React, { useState } from 'react';
import { submitReview } from './api';

const ReviewForm = ({ onSubmitted }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const saved = await submitReview({ name, rating, text });
      onSubmitted(saved);
      setName('');
      setRating(5);
      setText('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6">
      {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        maxLength={60}
        className="w-full mb-3 px-3 py-2 rounded bg-black border border-white/20 text-white"
      />
      <div className="mb-3 text-2xl" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            onClick={() => setRating(star)}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
            className={star <= rating ? 'text-yellow-400' : 'text-gray-600'}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        required
        maxLength={500}
        rows={4}
        className="w-full mb-3 px-3 py-2 rounded bg-black border border-white/20 text-white"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-white text-black py-2 rounded-full font-semibold disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
};

export default ReviewForm;
