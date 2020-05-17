import axios from "axios";

const getPixabayImages = async () => {
  let search = encodeURIComponent("church");

  let response = await axios.get(`https://pixabay.com/photos/search/${search}`);

  let document = new DOMParser().parseFromString(response.data, "text/html");

  let images = [].slice
    .call(document.querySelectorAll(".item img"))
    .map(el =>
      el.src.includes("blank") ? el.getAttribute("data-lazy") : el.src
    )
    .filter(el => !!el);

  return Promise.resolve(images);
};

export { getPixabayImages };
