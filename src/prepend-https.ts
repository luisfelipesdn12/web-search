/**
 * This is a modified/simplified version of
 * [prepend-http](https://github.com/sindresorhus/prepend-http).
 *
 * @license MIT License - Copyright (c) Sindre Sorhus
 * <sindresorhus@gmail.com> (sindresorhus.com)
 */
export default function prependHttps(url: string): string {
    url = url.trim();

    if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
        return url;
    }

    return url.replace(/^(?!(?:\w+:)?\/\/)/, "https://");
}
