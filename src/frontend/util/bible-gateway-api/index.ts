import axios from 'axios';

const searchForVerse = async (search: string, version: string) => {
    try {
        let encodedSearch = encodeURIComponent(search);
        let encoodedVersion = encodeURIComponent(version);

        const url = `https://www.biblegateway.com/passage?search=${encodedSearch}&version=${encoodedVersion}`;

        const result = await axios.get(url);

        let parser = new DOMParser();

        let doc = parser.parseFromString(result.data, 'text/html');

        const verseElement = doc.querySelector('.bcv');

        if (!verseElement) return;

        const verse = verseElement.textContent;

        let elements = Array.prototype.slice.call(doc.querySelectorAll('.text'));

        let content = [];
        for (let i = 0; i < elements.length; i++) {
            let el = elements[i];
            if (el) {
                let text = el.textContent;
                if (text.substr(0, 4) != 'Back') content.push(text);
            }
        }

        if (content.length === 0) throw new Error('Could not find verse');

        return Promise.resolve({ verse, content });
    } catch (e) {
        return Promise.reject(e);
    }
};

export { searchForVerse };
