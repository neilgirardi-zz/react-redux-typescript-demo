import React, { PureComponent } from 'react'
import Movie from '../../../store/types/Movie'
import SearchResult from './SearchResult'

interface State {
  query: string,
}

interface Props {
  movies: Array<Movie>
  fetchMovies: Function
}

class SearchControls extends PureComponent<Props, State> {

  constructor (props: Props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      this.props.fetchMovies(this.state.query)
    }
  }

  resultList () {
      return (
        <div className='results'>
          <ul>
            {this.props.movies.map((movie: Movie, i: number) => (
              <li key={i}>
                <SearchResult {...movie} />
              </li>
            ))}
          </ul>
        </div>
      )
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
            this.props.fetchMovies(this.state.query)
          }}>Search
          </button>

        </div>
        {this.resultList()}
      </>
    )
  }

}

export default SearchControls
