import React, { Component } from 'react'
import SearchContainer from '../../components/search/containers/SearchContainer'

interface Props {
    status: string,
    errorMessage: string
}

class Home extends Component <Props, any> {
    constructor (props: Props) {
        super(props);
    }

  render() {
    return (
      <div className={'container main-content'}>

        <h1>New York Times Movie Reviews</h1>

        {/* Ajax loading spinner */}
        { this.props.status === 'pending' &&
          <img src={'http://localhost:3000/spinner.gif'} alt={'loading'} />
        }

        {/* Search UI */}
        <SearchContainer {...this.state} {...this.props} />

        {/* UI Errors */}
        { this.props.errorMessage !== '' &&
        <span className='errorMessage'>{ this.props.errorMessage }</span>
        }
      </div>
    )
  }
}

export default Home