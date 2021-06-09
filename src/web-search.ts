import prependHttps from "./prepend-https";
import dataJSON from "./data.json";
import { WebSearchData } from "./types";

const data = dataJSON as WebSearchData;

/**
 * Get search URL in a website from a search term.
 * @param websiteURL The website to make the search
 * @param searchQuery The search term
 * @returns The complete URL to the search on website
 *
 * @example ```ts
 * // Allow compact/human-friendly URL
 * webSearch("google.com", "how to make a carrot cake");
 * => "https://google.com/search?q=how%20to%20make%20a%20carrot%20cake"
 *
 * // Allow complete URL, just get the host name
 * webSearch("https://duckduckgo.com/?justGet=theHostName", "dogecoin");
 * => "https://duckduckgo.com/?q=dogecoin"
 *
 * // Returns undefined with a unknown website
 * webSearch("ea6194cb-47e1-4165-9090-0fa80539e82a.com", "what is uuid?");
 * => undefined
 * ```
 */
export default function webSearch(
    websiteURL: string,
    searchQuery: string,
): string {
    const targetHost = new URL(prependHttps(websiteURL)).hostname.replace(
        "www.",
        "",
    );

    const matchedWebsite = data.websites.find(w => {
        const currentHost = new URL(
            prependHttps(w.url_prefix),
        ).hostname.replace("www.", "");

        return targetHost === currentHost;
    });

    return matchedWebsite
        ? `${matchedWebsite.url_prefix}${encodeURIComponent(searchQuery)}${
            matchedWebsite.url_suffix || ""
        }`
        : undefined;
}

/**
 * @returns The complete data of `web-search`,
 * with the name and URLs of each website.
 *
 * @example ```ts
 * webSearchData();
 * // => {
 * //     websites: [
 * //         {
 * //             "name": "Example Domain",
 * //             "url_prefix": "https://example.com/search?q="
 * //         },
 * //         ...
 * //     ]
 * // }
```
 */
export function webSearchData(): WebSearchData {
    return data;
}

// For `require` statement
exports = webSearch;
module.exports = webSearch;
exports.webSearchData = webSearchData;
module.exports.webSearchData = webSearchData;
