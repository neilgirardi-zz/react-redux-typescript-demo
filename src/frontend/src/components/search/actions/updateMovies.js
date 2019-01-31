export const UPDATE_MOVIES = 'UPDATE_MOVIES'

export default function(movies) {
  return {
    type: UPDATE_MOVIES,
    payload: movies
  }
}