import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { submitReview } from './api';

const ReviewForm = ({ onSubmitted }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSubmitted(false);
    try {
      const saved = await submitReview({ name, rating, text });
      onSubmitted(saved);
      setName('');
      setRating(5);
      setText('');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10">
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      {submitted && (
        <p role="status" className="text-green-400 text-sm mb-4">
          {t("ReviewSubmittedThanks")}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="review-name" className="block text-sm text-white/60 mb-2">
            {t("YourNameLabel")}
          </label>
          <input
            id="review-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("YourNamePlaceholder")}
            required
            maxLength={60}
            className="w-full px-4 py-3 rounded bg-black border border-white/20 text-white"
          />
        </div>
        <div>
          <span className="block text-sm text-white/60 mb-2">{t("RatingLabel")}</span>
          <div className="text-3xl" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                role="radio"
                aria-checked={star === rating}
                onClick={() => setRating(star)}
                aria-label={`${star} star${star > 1 ? 's' : ''}`}
                className={star <= rating ? 'text-yellow-400' : 'text-gray-600'}
              >
                {star <= rating ? '★' : '☆'}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="review-text" className="block text-sm text-white/60 mb-2">
          {t("YourReviewLabel")}
        </label>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("WriteYourReviewPlaceholder")}
          required
          maxLength={500}
          rows={6}
          className="w-full px-4 py-3 rounded bg-black border border-white/20 text-white"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="block mx-auto w-full sm:w-auto sm:px-16 bg-white text-black py-3 rounded-full font-semibold disabled:opacity-50"
      >
        {submitting ? t("Submitting") : t("SubmitReview")}
      </button>
    </form>
  );
};

export default ReviewForm;
