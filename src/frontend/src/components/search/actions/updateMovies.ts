export const UPDATE_MOVIES = 'UPDATE_MOVIES';
import Movie from '../../../store/types/Movie'

export default function(movies: Array<Movie>) {
  return {
    type: UPDATE_MOVIES,
    payload: movies
  }
}