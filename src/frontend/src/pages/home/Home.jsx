import React, { Component } from 'react'
import SearchContainer from '../../components/search/containers/SearchContainer'

class Home extends Component {
  render() {
    return (
      <div className={'container main-content'}>
        <h1>New York Times Movie Reviews</h1>
        <SearchContainer {...this.state} {...this.props} />
      </div>
    )
  }
}

export default Home