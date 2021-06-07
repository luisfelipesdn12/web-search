import { writeFile } from "fs";
import data from "./data.json";

console.log("> Sorting websites by name");
data.websites.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
});

console.log("> Filtering websites, excluding duplicated elements");
data.websites.filter((website, index) => {
    return data.websites.indexOf(website) == index;
});

console.log("> Rendering the object to a JSON string");
const JSONOutput = JSON.stringify(data, undefined, 4) + "\n";

console.log("> Saving result to 'src/data.json'");
writeFile("src/data.json", JSONOutput, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
