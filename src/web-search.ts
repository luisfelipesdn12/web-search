import prependHttp from "prepend-http";
import data from "./data.json";

/**
 *
 * @param websiteURL The website to make the search
 * @param searchQuery The search term
 * @returns The complete URL to the search on website
 *
 * @example ts```
 * webSearch("google.com", "how to make a carrot cake")
 * ```
 */
export default function webSearch(
    websiteURL: string,
    searchQuery: string,
): string {
    const targetHost = new URL(prependHttp(websiteURL)).hostname.replace(
        "www.",
        "",
    );

    const matchedWebsite = data.websites.find(w => {
        const currentHost = new URL(prependHttp(w.url_prefix)).hostname.replace(
            "www.",
            "",
        );

        return targetHost === currentHost;
    });

    return matchedWebsite
        ? `${matchedWebsite.url_prefix}${searchQuery}`
        : undefined;
}
