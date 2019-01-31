import { connect } from 'react-redux'
import MainContent from '../MainContent'
import ApplicationState from '../../../store/types/ApplicationState'

const stateToProps = (state: ApplicationState) => {
  const { ajaxRequestStatus } = state;
  const { status } = ajaxRequestStatus;
  return {
    status
  }
};

const connected = connect(
  stateToProps,
  null
)(MainContent);

export default connected
