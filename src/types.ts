/**
 * The data from `data.json`,
 * storing the websites.
 */
export interface WebSearchData {
    websites: {
        /**
         * @example "DuckDuckGo"
         */
        name: string;
        /**
         * The search url before the search term.
         *
         * @example "https://duckduckgo.com/?q="
         * @see It is recommended to include additional
         * query variables in `url_suffix`.
         */
        url_prefix: string;
        /**
         * The (optional) url after the search term.
         * Usually contains additional query variables
         * to provide metadata about the search.
         *
         * @example "&iax=images&ia=images"
         */
        url_suffix?: string;
    }[];
}
