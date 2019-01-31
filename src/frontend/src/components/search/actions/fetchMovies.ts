import axios from 'axios'
import updateMovies from './updateMovies'
import setAjaxRequestStatus from '../../main-content/actions/setAjaxRequestStatus'
import updateUIError from '../../main-content/actions/updateUIError'
import clearUIError from '../../main-content/actions/clearUIError'

export default function(query: string) {
  return function(dispatch: Function, getState: Function) {
    const url = `/reviews/${query}`;

    // clear any existing UI error messages
    dispatch(clearUIError({errorMessage: ''}));

    // display Ajax loading spinner
    dispatch(setAjaxRequestStatus({status: 'pending'}));

    axios.get(url)
      .then((response) => {

        // remove Ajax loading spinner
        dispatch(setAjaxRequestStatus({status: 'complete'}));

        // parse results
        const { data } = response;

        // update store with results
        dispatch(updateMovies(data));

        // if not results were found, display a UI error
        if (data.length === 0) {
          dispatch(updateUIError({errorMessage: 'Your search did not return any results'}))
        }
      })
      .catch(error => {

        // remove Ajax loading spinner
        dispatch(setAjaxRequestStatus({status: 'complete'}));
        console.log(error)
      })
  }
}
