import { UPDATE_UI_ERROR} from "../actions/updateUIError";
import { CLEAR_UI_ERROR} from "../actions/clearUIError";
import Action from '../../../store/types/Action'

export default (state={errorMessage: ''}, action: Action) => {
    switch(action.type) {
        case UPDATE_UI_ERROR:
        case CLEAR_UI_ERROR:
            return action.payload;

        default:
            return state
    }
}