import url from 'url';

const urlString = 'https://www.wikipedia.org/';

const urlObj = new URL(urlString);

console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import meta.url - gives file url
console.log(import.meta.url);

// fileURlToPath()
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search); // or just use urlObj.searchParams
console.log(params.get('q'));
params.append('limit', '5');
console.log(params);