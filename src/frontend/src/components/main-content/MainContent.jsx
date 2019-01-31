import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/home/Home'

class MainContent extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={props => (
          <Home {...this.state} {...this.props} />
        )} />

      </Switch>
    )
  }
}

export default MainContent
