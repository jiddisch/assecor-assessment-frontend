import { CategoryName } from '../category-names/category-name';

export interface Film {
  title: string;
  characters: string[];
  planets: string[];
  charactersCategoryNames?: CategoryName[];
  planetsCategoryNames?: CategoryName[];
  director: string;
  producer: string;
  release_date: string;
}

