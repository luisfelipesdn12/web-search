import webSearch, { webSearchData } from "./web-search";

describe("webSearch", () => {
    it("should return the search URL with a compact URL", () => {
        const url = webSearch("google.com", "how to make a carrot cake");

        expect(url).toBeDefined();
        expect(url).toBe(
            "https://google.com/search?q=how%20to%20make%20a%20carrot%20cake",
        );
    });

    it("should return the search URL with a complete URL", () => {
        const url = webSearch(
            "https://duckduckgo.com/?justGet=theHostName",
            "dogecoin",
        );

        expect(url).toBeDefined();
        expect(url).toBe("https://duckduckgo.com/?q=dogecoin");
    });

    it("should return undefined with a unknown website", () => {
        const url = webSearch(
            "ea6194cb-47e1-4165-9090-0fa80539e82a.com",
            "what is uuid?",
        );

        expect(url).toBeUndefined();
    });
});

describe("webSearchData", () => {
    it("should return the data", () => {
        const data = webSearchData();

        expect(data).toBeDefined();
    });
});
