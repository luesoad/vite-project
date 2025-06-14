export type Concert = {
  location: string;
  bands?: string[];
  date: string;
  time?: string;
};

export type ConcertYear = {
  year: number;
  concerts: Concert[];
};
