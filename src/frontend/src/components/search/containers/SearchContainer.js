import { connect } from 'react-redux'
import SearchControls from '../components/SearchControls'
import fetchMovies from '../actions/fetchMovies'

const stateToProps = state => {
  const { movies } = state
  return {
    movies
  }
}

const dispatchToProps = dispatch => {
  return {
    fetchMovies: (query) => dispatch(fetchMovies(query))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(SearchControls)

export default connected
