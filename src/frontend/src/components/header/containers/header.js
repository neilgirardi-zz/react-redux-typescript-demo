import { connect } from 'react-redux'
import Header from '../Header'

const stateToProps = (state, ownProps) => {
  return state
}

const connected = connect(
  stateToProps
)(Header)

export default connected
