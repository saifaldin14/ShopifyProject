import axios from "axios";

const BASE_URL =
  "https://api.nasa.gov/planetary/apod?start_date=2021-09-01&end_date=2021-09-08&api_key=612p2r2bYK4qR9NiJBvqQQ4EbGyWekmaqfkG4dEh";

const nasa = {
  async getNasa() {
    return await axios.get(BASE_URL);
  },
};

export default nasa;
