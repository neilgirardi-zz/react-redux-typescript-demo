import { UPDATE_MOVIES } from '../actions/updateMovies'
import Action from "../../../store/types/Action";

export default (state=[], action: Action) => {
  switch(action.type) {
    case UPDATE_MOVIES:
      return action.payload;

    default:
      return state
  }
}
