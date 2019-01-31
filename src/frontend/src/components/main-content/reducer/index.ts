import { SET_AJAX_REQUEST_STATUS } from '../actions/setAjaxRequestStatus'
import Action from '../../../store/types/Action'

export default (state={status: 'complete'}, action: Action) => {
  switch(action.type) {
    case SET_AJAX_REQUEST_STATUS:
      return action.payload;

    default:
      return state
  }
}