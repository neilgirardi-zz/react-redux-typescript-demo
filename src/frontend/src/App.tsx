import React, { Component } from 'react'
import Header from './components/header/containers/header'
import MainContentContainer from './components/main-content/container/MainContentContainer'

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <MainContentContainer />
      </>
    )
  }
}

export default App
