import { Author } from "./author";

export interface QuoteAuthor {
  id : number,
  content : string,
  //is_favori : boolean,
  author : Author
};