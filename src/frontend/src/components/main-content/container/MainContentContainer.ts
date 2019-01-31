import { connect } from 'react-redux'
import MainContent from '../MainContent'
import ApplicationState from '../../../store/types/ApplicationState'

const stateToProps = (state: ApplicationState) => {
  const { ajaxRequestStatus, uiError } = state;
  const { status } = ajaxRequestStatus;
  const { errorMessage } = uiError;
  return {
    status,
    errorMessage
  }
};

const connected = connect(
  stateToProps,
  null
)(MainContent);

export default connected
