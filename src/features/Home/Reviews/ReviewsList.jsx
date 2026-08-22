import React from 'react';
import { useTranslation } from 'react-i18next';
import ReviewCard from './ReviewCard';

const ReviewsList = ({ reviews, hasMore, onLoadMore, loading, loadingMore }) => {
  const { t } = useTranslation();

  if (loading) {
    return <p className="text-center text-gray-400">{t("LoadingReviews")}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center text-gray-400">{t("NoReviewsYet")}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {reviews.map((r) => (
          <ReviewCard key={r.id} name={r.name} rating={r.rating} text={r.text} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors disabled:opacity-50"
          >
            {t("LoadMoreReviews")}
          </button>
        </div>
      )}
    </>
  );
};

export default ReviewsList;
