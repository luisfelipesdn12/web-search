# Contribution Guide

First, thank you for the contribution! :tada:

## Getting Started

1. Fork and clone the repo
```sh
git clone https://github.com/yourusername/web-search
cd web-search
```

2. Install dependencies
```sh
# Using yarn
yarn

# Using npm
npm install
```

3. Create a branch for your changes
```sh
git checkout -b add-youtube-website
```

## Adding a website

The websites data are stored in [`src/data.json`](src/data.json).

Add the new websites on the JSON file:

```json5
{
    [
        ...
        {
            ...
        },
        {
            "name": "YouTube",
            "url_prefix": "https://youtube.com/results?search_query="
        }
    ]
}
```

> Read [Committing](#committing) to know what to do then.

## Committing

### Pre-commit

Before committing, you **must** run the `precommit` script.

```sh
# Using yarn
yarn precommit

# Using npm
npm run precommit
```

This script will:

1. Lint the code (with ESLint and Prettier)
2. Test the code (with Jest)
3. Sort websites by name on [`src/data.json`](src/data.json)
4. Remove duplicated elements

### Commit message

It is recommended to follow [conventional commits](https://conventionalcommits.org).

If you ❤️ to add emojis, feel free to, you may follow [gitmoji](https://gitmoji.dev).

Example:
```sh
git commit -m "feat: ✨ Add YouTube website"
```
