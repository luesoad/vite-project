export type Concert = {
  location: string;
  bands?: string[];
  date: string;
  time?: string;
};

export type ConcertYear = {
  id: string;
  year: number;
  concerts: Concert[];
};
