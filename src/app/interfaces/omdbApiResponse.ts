import { Movie } from './movies';

export interface OmdbApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
