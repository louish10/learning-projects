import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object

const urlObj = new URL(urlString);

console.log(urlObj.pathname);

console.log(url.format(urlObj));

console.log(import.meta.url);
