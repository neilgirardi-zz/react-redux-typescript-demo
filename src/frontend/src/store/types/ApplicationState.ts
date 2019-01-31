import Movie from './Movie';
import AjaxRequestStatus from './AjaxRequestStatus'

export default interface ApplicationState {
    movies: Array<Movie>,
    ajaxRequestStatus: AjaxRequestStatus
}
