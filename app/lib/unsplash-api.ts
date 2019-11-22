import axios from "axios";

const getUnsplashImages = async () => {
  let response = await axios.get("https://unsplash.com/s/photos/churches");

  let parser = new DOMParser();

  let document = parser.parseFromString(response.data, "text/html");

  let images = [].slice
    .call(document.querySelectorAll("figure img"))
    .map(img => img.src)
    .filter(source => source.length > 0 && !source.includes("profile"));

  console.log(images);
  return Promise.resolve(images);
};

export { getUnsplashImages };
