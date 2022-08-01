export interface IReview {
  _id: string;
  product: string;
  review: string;
  rating: number;
  user: string;
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
