import { combineReducers } from 'redux'
import searchReducer from '../components/search/reducer'
import ajaxRequestReducer from '../components/main-content/reducer'

export default combineReducers({
  movies: searchReducer,
  ajaxRequestStatus: ajaxRequestReducer
})
