import React from 'react';
import { useTranslation } from 'react-i18next';

// Shows the review in whichever of the two site languages the visitor is
// currently reading in: the original text if it's already in that language,
// otherwise the DeepL translation saved alongside it at submit time. Falls
// back to the original text if no translation was ever produced (DeepL
// unconfigured or the call failed) — never shows blank.
const ReviewCard = ({ name, rating, text, translatedText, sourceLang }) => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || '').slice(0, 2).toLowerCase();
  const isOriginalLanguage = !sourceLang || currentLang === sourceLang.toLowerCase();
  const displayText = isOriginalLanguage || !translatedText ? text : translatedText;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
      <div className="text-yellow-400 text-sm mb-3" role="img" aria-label={`${rating} out of 5 stars`}>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
      <p className="text-gray-300 text-sm mb-3">"{displayText}"</p>
      <p className="text-gray-500 text-xs font-semibold">— {name}</p>
    </div>
  );
};

export default ReviewCard;
