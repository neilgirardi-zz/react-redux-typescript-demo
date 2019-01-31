export const UPDATE_UI_ERROR = 'UPDATE_UI_ERROR';
import UIError from '../../../store/types/UIError'

export default function(error: UIError) {
    return {
        type: UPDATE_UI_ERROR,
        payload: error
    }
}
