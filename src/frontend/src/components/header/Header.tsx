import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import '../../App.scss'

class Header extends PureComponent {

  render () {
    return (
      <header className='App-header'>
        <nav className='navbar navbar-dark fixed-top bg-light'>
          <ul className='container'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
