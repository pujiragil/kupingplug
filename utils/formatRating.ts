export const formatRating = (rating: number) => {
  return Array.from({ length: rating >= 5 ? 5 : rating }, (_, idx) => idx + 1);
};
