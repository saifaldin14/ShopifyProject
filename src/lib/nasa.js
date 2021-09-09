import axios from "axios";

const BASE_URL =
  "https://api.nasa.gov/planetary/apod?api_key=612p2r2bYK4qR9NiJBvqQQ4EbGyWekmaqfkG4dEh";

const nasa = {
  async getNasa() {
    return await axios.get(BASE_URL);
  },
};

export default nasa;
