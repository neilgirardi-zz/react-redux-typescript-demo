import { combineReducers } from 'redux'
import searchReducer from '../components/search/reducer'
import ajaxRequestReducer from '../components/main-content/reducer/ajaxRequestStatus'
import uiErrorReducer from '../components/main-content/reducer/uiError'

export default combineReducers({
  movies: searchReducer,
  ajaxRequestStatus: ajaxRequestReducer,
  uiError: uiErrorReducer
})
