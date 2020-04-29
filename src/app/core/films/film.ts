export interface Film {
  title: string;
  characters: string[];
  charactersCategoryNames?: CategoryName[];
  planets: string[];
  planetsCategoryNames?: CategoryName[];
  director: string;
  producer: string;
  release_date: string;
}

export interface CategoryName {
  id: string;
  name: string;
  type: string;
}
