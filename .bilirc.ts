import { Config as Configuration } from "bili";

const configuration: Configuration = {
    input: "src/web-search.ts",
    output: {
        format: ["es", "esm", "cjs", "commonjs"],
        fileName: ({ format }, defaultFileName) => {
            if (format === "es") return "web-search.mjs";
            if (format === "cjs") return "web-search.cjs";
            if (format === "commonjs") return "web-search.js";
            return defaultFileName;
        },
    },
};

export default configuration;
