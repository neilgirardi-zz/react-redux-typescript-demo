import React, { PureComponent } from 'react'
import Movie from './../interfaces/Movie'

class SearchResult extends PureComponent<any, any> {

    constructor(props: any) {
        super(props)
    }

    render() {
        console.log(this.props);
        const {
            display_title,
            mpaa_rating,
            headline,
            summary_short,
            link
        } = this.props;

        return (
            <div className='movie'>
                <h1 className='movie-title'>{ display_title }</h1>
                {mpaa_rating &&
                <span>MPAA Rating: {mpaa_rating}</span>
                }
                <h2>{ headline }</h2>
                <p>{ summary_short }</p>
                <p>
                    <a href={ link.url }
                        className='review-link'
                        target='_blank'>
                        { link.suggested_link_text }
                    </a>
                </p>
            </div>
        )
    }

}

export default SearchResult