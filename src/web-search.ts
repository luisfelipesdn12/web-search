import prependHttp from "prepend-http";
import data from "./data.json";

export default function webSearch(websiteURL: string, searchQuery: string) {
    const targetURL = prependHttp(websiteURL, {
        https: true,
    });
    const targetHost = new URL(targetURL).hostname.replace("www.", "");

    const matchedWebsite = data.websites.find(w => {
        const currentURL = prependHttp(w.url_prefix, {
            https: true,
        });
        const currentHost = new URL(currentURL).hostname.replace("www.", "");

        return targetHost === currentHost;
    });

    return matchedWebsite ? `${matchedWebsite.url_prefix}${searchQuery}` : undefined;
}
