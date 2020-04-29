import { CategoryName } from '../category-names/category-name';

export interface Planet {
  name: string;
  gravity: string;
  population: string;
  films: string[];
  filmsCategoryNames?: CategoryName[];
}
