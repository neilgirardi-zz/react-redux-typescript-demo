import { connect } from 'react-redux'
import SearchControls from '../components/SearchControls'
import fetchMovies from '../actions/fetchMovies'
import ApplicationState from '../../../store/types/ApplicationState'

const stateToProps = (state: ApplicationState) => {
  const { movies } = state;
  return {
    movies
  }
};

const dispatchToProps = (dispatch: Function) => {
  return {
    fetchMovies: (query: string) => dispatch(fetchMovies(query))
  }
};

const connected = connect(
  stateToProps,
  dispatchToProps
)(SearchControls);

export default connected
