import type { Concert } from "../types";

export interface YearlyConcerts {
  year: number;
  concerts: Concert[];
}

export interface ExtendedConcert extends Concert {
  year: number;
}

export function flattenConcerts(data: YearlyConcerts[]): ExtendedConcert[] {
  return data.flatMap((el) =>
    el.concerts.map((concert) => ({
      ...concert,
      year: el.year,
    }))
  );
}

export function getUpcomingConcerts(
  concerts: ExtendedConcert[],
  now: Date
): ExtendedConcert[] {
  return concerts
    .filter((concert) => concert.date && new Date(concert.date) >= now)
    .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());
}

export function getPastConcerts(
  concerts: ExtendedConcert[],
  now: Date
): ExtendedConcert[] {
  return concerts
    .filter((concert) => concert.date && new Date(concert.date) < now)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());
}
