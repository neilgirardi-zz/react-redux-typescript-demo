import React, { Component } from 'react'
import SearchControls from '../../components/search/components/SearchControls'

class Home extends Component {
  render() {
    return (
      <div className={'container main-content'}>
        <h1>New York Times Movie Reviews</h1>
        <SearchControls {...this.state} {...this.props} />
      </div>
    )
  }
}

export default Home