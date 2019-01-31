import axios from 'axios'
import updateMovies from './updateMovies'

export default function(query) {
  return function(dispatch, getState) {
    const url = `/reviews/${query}`;

    axios.get(url)
      .then((response) => {
        dispatch(updateMovies(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
