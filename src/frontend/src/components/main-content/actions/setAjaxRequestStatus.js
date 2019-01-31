export const SET_AJAX_REQUEST_STATUS = 'SET_AJAX_REQUEST_STATUS'

export default function(status) {
  return {
    type: SET_AJAX_REQUEST_STATUS,
    payload: status
  }
}
