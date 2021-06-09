import data from "./data.json";

test("data.json should be follow WebSearchData", () => {
    expect(data).toBeDefined();
    expect(data).toHaveProperty("websites");

    expect(data.websites).toBeDefined();
    expect(data.websites).toBeInstanceOf(Array);

    data.websites.forEach(website => {
        expect(website).toHaveProperty("name");
        expect(website.name).toBeDefined();

        expect(website).toHaveProperty("url_prefix");
        expect(website.url_prefix).toBeDefined();
    });
});
