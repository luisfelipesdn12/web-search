# web-search
A package to provide search links for website from a search term.

[![Web Search on NPM](https://nodei.co/npm/web-search.png)](https://www.npmjs.com/package/web-search)

## Install

```sh
# Using yarn
yarn add web-search

# Using npm
npm install web-search
```

## Usage

Basically, you just need to provide the website to make the search and the search term.

```ts
import webSearch from "web-search";

webSearch("npmjs.com", "web-search");
// => "https://www.npmjs.com/search?q=web-search"
```

---

### Functions

#### `webSearch`

The main function, get search URL in a website from a search term.

- Allow compact/human-friendly URL
```ts
webSearch("google.com", "how to make a carrot cake");
// => "https://google.com/search?q=how%20to%20make%20a%20carrot%20cake"
```

- Allow complete URL, just get the host name
```ts
webSearch("https://duckduckgo.com/?justGet=theHostName", "dogecoin");
// => "https://duckduckgo.com/?q=dogecoin"
```

- Returns `undefined` with a unknown website
```ts
webSearch("ea6194cb-47e1-4165-9090-0fa80539e82a.com", "what is uuid?");
// => undefined
```

#### `webSearchData`

If you just want to make cool stuff with the data behind the `webSearch`, `webSearchData` returns it with the name and URLs of each website.

```ts
import webSearch, { webSearchData } from "web-search";

webSearchData();
// => {
//     websites: [
//         {
//             "name": "Example Domain",
//             "url_prefix": "https://example.com/search?q="
//         },
//         ...
//     ]
// }
```
