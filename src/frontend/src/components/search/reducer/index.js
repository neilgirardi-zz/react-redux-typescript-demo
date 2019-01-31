import { UPDATE_MOVIES } from '../actions/updateMovies'

export default (state=[], action) => {
  switch(action.type) {
    case UPDATE_MOVIES:
      return action.payload

    default:
      return state
  }
}
