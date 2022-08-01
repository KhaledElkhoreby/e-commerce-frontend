import { useGetProductReviewsQuery } from '../../lib/services/productsApi';

export default function Reviews({ productId }: { productId: string }) {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetProductReviewsQuery(productId);

  if (isError) return <div>There is error</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {reviews?.map((review) => (
        <p key={review._id}>{review.review}</p>
      ))}
    </div>
  );
}
