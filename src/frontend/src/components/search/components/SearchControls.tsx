import React, { PureComponent } from 'react'
import axios from 'axios'
import Movie from '../interfaces/Movie'
import SearchResult from './SearchResult'

interface State {
  query: string,
  movies: Array<Movie>
}

class SearchControls extends PureComponent<State, any> {

  constructor (props: any) {
    super(props);

    this.state = {
      query: '',
      movies: []
    };

    this.fetchMovies = this.fetchMovies.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  fetchMovies (query: string) {
    const url = `/reviews/${query}`;

    axios.get(url)
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch(error => {
        this.setState({ movies: [] });
        console.log(error)
      })
  };

  handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      this.fetchMovies(this.state.query)
    }
  }

  resultList () {
    if (this.state.movies.length) {
      return (
        <div className='results'>
          <ul>
            {this.state.movies.map((movie: Movie, i: number) => (
              <li key={i}>
                <SearchResult {...movie} />
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <>
        <div className='search-controls'>

          <input
            type='text'
            onChange={(evt) => {
              const query = evt.target.value.trim().toLowerCase();
              this.setState({
                query: query
              })
            }}
            onKeyPress={(evt) => this.handleKeyPress(evt)}
            placeholder='Enter a Movie Title'
          />

          <button type='button' onClick={() => {
            this.fetchMovies(this.state.query)
          }}>Search
          </button>

        </div>
        {this.resultList()}
      </>
    )
  }

}

export default SearchControls
