import { combineReducers } from 'redux'
import searchReducer from '../components/search/reducer'

export default combineReducers({
  movies: searchReducer
})
