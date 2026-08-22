import React from 'react';

const ReviewCard = ({ name, rating, text }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
    <div className="text-yellow-400 text-sm mb-3" role="img" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
    <p className="text-gray-300 text-sm mb-3">"{text}"</p>
    <p className="text-gray-500 text-xs font-semibold">— {name}</p>
  </div>
);

export default ReviewCard;
