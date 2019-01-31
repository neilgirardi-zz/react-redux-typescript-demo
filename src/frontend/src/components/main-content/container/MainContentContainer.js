import { connect } from 'react-redux'
import MainContent from '../MainContent'

const stateToProps = state => {
  const { ajaxRequestStatus } = state;
  const { status } = ajaxRequestStatus
  return {
    status
  }
}

const connected = connect(
  stateToProps,
  null
)(MainContent)

export default connected
