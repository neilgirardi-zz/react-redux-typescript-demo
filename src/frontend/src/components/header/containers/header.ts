import { connect } from 'react-redux'
import Header from '../Header'

const stateToProps = (state: object, ownProps: object) => {
  return state
};

const connected = connect(
  stateToProps
)(Header);

export default connected
