import { CategoryName } from '../category-names/category-name';

export interface Character {
  title: string;
  films: string[];
  filmsCategoryNames?: CategoryName[];
  hight: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_day: string;
  gender: string;
}
