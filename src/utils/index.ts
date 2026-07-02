export interface IProductsModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface categoryDataModel {
  id: number;
  title: string;
  image: string;
}

export interface useDataModel {
  id: number;
  title: string;
  text: string;
  image: string;
}
export interface CardModel {
  id: number;
  title: string;
  text: string;
  icon: any;
}
export interface IReviewModel {
  limit: number;
  skip: number;
  total: number;
  comments: ICommentModel[];
}
export interface ICommentModel {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}
