import axios from "axios";

const getPixabayImages = async () => {
  let q = "church";
  let key = ""; // unsplash api key

  let response = await axios.get("https://pixabay.com/api", {
    params: {
      q,
      key,
      image_type: "photo",
      orientation: "horizontal",
      per_page: 100
    }
  });

  let images = response.data.hits;

  return Promise.resolve(images);
};

export { getPixabayImages };
