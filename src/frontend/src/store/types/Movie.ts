import Link from './Link'

export default interface Movie {
    display_title: string,
    mpaa_rating: string,
    critics_pick: number,
    byline: string,
    headline: string,
    summary_short: string,
    publication_date: string,
    opening_date: string,
    date_updated:string,
    link: Link,
    multimedia: any
}
