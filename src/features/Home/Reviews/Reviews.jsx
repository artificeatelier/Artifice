import React, { useEffect, useState } from 'react';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';
import { fetchReviews } from './api';

const PAGE_SIZE = 6;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchReviews({ skip: 0, limit: PAGE_SIZE })
      .then(({ items, hasMore: more }) => {
        if (cancelled) return;
        setReviews(items);
        setHasMore(more);
      })
      .catch(() => {
        if (!cancelled) setLoadError('Could not load reviews.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleLoadMore = async () => {
    const { items, hasMore: more } = await fetchReviews({ skip: reviews.length, limit: PAGE_SIZE });
    setReviews((prev) => [...prev, ...items]);
    setHasMore(more);
  };

  const handleSubmitted = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <>
      {/* Section 1 — reuses the same glass/glow container as the existing
          Testimonial section in Home.jsx (bg-black/90 backdrop-blur-md,
          blurred gradient glow behind it) so this reads as the same
          "client feedback" visual identity already on the site. */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black blur-2xl rounded-3xl z-0" />
        <div className="relative z-10 bg-black/90 backdrop-blur-md rounded-3xl shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] border border-white/10">
          <div className="text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12">What Our Clients Say</h2>
              {loadError && <p className="text-center text-red-400 mb-4">{loadError}</p>}
              <ReviewsList reviews={reviews} hasMore={hasMore} onLoadMore={handleLoadMore} loading={loading} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — plain dark card, no existing site pattern to match
          for a form (the site has no prior submit-form section). */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Share Your Experience</h2>
          <ReviewForm onSubmitted={handleSubmitted} />
        </div>
      </section>
    </>
  );
};

export default Reviews;
