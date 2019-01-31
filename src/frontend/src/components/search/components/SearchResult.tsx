import React, { PureComponent } from 'react'
import Movie from '../../../store/types/Movie'

class SearchResult extends PureComponent<any, any> {

    constructor(props: Movie) {
        super(props)
    }

    render() {
        const {
            display_title,
            mpaa_rating,
            headline,
            summary_short,
            link
        } = this.props;

        const { url, suggested_link_text } = link;

        return (
            <div className='movie'>
                <h1 className='movie-title'>{ display_title }</h1>

                {mpaa_rating &&
                    <span>MPAA Rating: {mpaa_rating}</span>
                }

                <h2>{ headline }</h2>

                <p>{ summary_short }</p>

                <p>
                    <a href={ url }
                        className='review-link'
                        target='_blank'>
                        { suggested_link_text }
                    </a>
                </p>
            </div>
        )
    }

}

export default SearchResult