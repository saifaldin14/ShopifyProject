import axios from "axios";

const date = new Date();
const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

const START_DATE = firstDay.toISOString().split("T")[0];

const BASE_URL = `https://api.nasa.gov/planetary/apod`;
const API_KEY = "api_key=612p2r2bYK4qR9NiJBvqQQ4EbGyWekmaqfkG4dEh";
const nasa = {
  async getNasa() {
    const fetchUrl = `${BASE_URL}?start_date=${START_DATE}&${API_KEY}`;
    return await axios.get(fetchUrl);
  },
  async getNasaWithDate(startDate, endDate) {
    localStorage.clear();
    const fetchUrl = `${BASE_URL}?start_date=${startDate}&end_date=${endDate}&${API_KEY}`;
    return await axios.get(fetchUrl);
  },
};

export default nasa;
