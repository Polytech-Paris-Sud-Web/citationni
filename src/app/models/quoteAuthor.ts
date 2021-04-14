import { Author } from "./author";

export interface QuoteAuthor {
  id : string,
  content : string,
  //is_favori : boolean,
  author : Author
};