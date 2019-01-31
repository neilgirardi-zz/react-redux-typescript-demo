import Movie from './Movie';
import AjaxRequestStatus from './AjaxRequestStatus'
import UIError from './UIError'

export default interface ApplicationState {
    movies: Array<Movie>,
    ajaxRequestStatus: AjaxRequestStatus
    uiError: UIError
}
