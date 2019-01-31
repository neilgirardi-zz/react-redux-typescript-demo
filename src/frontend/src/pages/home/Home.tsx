import React, { Component } from 'react'
import SearchContainer from '../../components/search/containers/SearchContainer'

interface Props {
    status: string
}

class Home extends Component <Props, any> {
    constructor (props: Props) {
        super(props);
    }

  render() {
    return (
      <div className={'container main-content'}>
        <h1>New York Times Movie Reviews</h1>
        {this.props.status === 'pending' &&
          <img src={'http://localhost:3000/spinner.gif'} alt={'loading'} />
        }
        <SearchContainer {...this.state} {...this.props} />
      </div>
    )
  }
}

export default Home