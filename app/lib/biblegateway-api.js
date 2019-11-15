const axios = require("axios");

const searchForVerse = async (search, version) => {
  try {
    let encodedSearch = encodeURIComponent(search);
    let encoodedVersion = encodeURIComponent(version);

    const url = `https://www.biblegateway.com/passage?search=${encodedSearch}&version=${encoodedVersion}`;

    const result = await axios.get(url);

    let parser = new DOMParser();

    let doc = parser.parseFromString(result.data, "text/html");

    const verse = doc.querySelector(".bcv").innerText;

    let elements = [].slice.call(doc.querySelectorAll(".text"));

    let content = [];
    for (let i = 0; i < elements.length; i++) {
      let text = elements[i].textContent;
      if (text.substr(0, 4) != "Back") content.push(text);
    }

    return Promise.resolve({ verse, content });
  } catch (e) {
    return Promise.reject(e);
  }
};

export { searchForVerse };
