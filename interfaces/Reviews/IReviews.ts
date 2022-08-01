export interface IReview {
  _id: string;
  product: string;
  review: string;
  rating: number;
  user: { _id: string; name: string; photo: string };
}

export interface IAllReviewsResponse {
  status: string;
  results: number;
  data: IReview[];
}
export interface IReviewResponse {
  status: string;
  results: number;
  data: IReview;
}
