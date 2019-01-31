import axios from 'axios'
import updateMovies from './updateMovies'
import setAjaxRequestStatus from '../../main-content/actions/setAjaxRequestStatus'

export default function(query: string) {
  return function(dispatch: Function, getState: Function) {
    const url = `/reviews/${query}`;

    dispatch(setAjaxRequestStatus({status: 'pending'}));

    axios.get(url)
      .then((response) => {
        dispatch(setAjaxRequestStatus({status: 'complete'}));
        dispatch(updateMovies(response.data))
      })
      .catch(error => {
        dispatch(setAjaxRequestStatus({status: 'complete'}));
        console.log(error)
      })
  }
}
