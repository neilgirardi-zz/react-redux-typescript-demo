export const CLEAR_UI_ERROR = 'CLEAR_UI_ERROR';
import UIError from '../../../store/types/UIError'

export default function(error: UIError) {
    return {
        type: CLEAR_UI_ERROR,
        payload: error
    }
}
