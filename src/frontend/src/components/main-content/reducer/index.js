import { SET_AJAX_REQUEST_STATUS } from '../actions/setAjaxRequestStatus'

export default (state={status: 'complete'}, action) => {
  switch(action.type) {
    case SET_AJAX_REQUEST_STATUS:
      return action.payload

    default:
      return state
  }
}