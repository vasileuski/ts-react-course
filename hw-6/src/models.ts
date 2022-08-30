export interface ICard {
  id?: number;
  image: string;
  description: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
  price: number;
}

export interface IEmoji {
  title: string;
  symbol: string;
  keywords: string;
}
