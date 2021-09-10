import axios from "axios";

//Get the first day of the current month
const date = new Date();
const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

//Turn the date into the YYYY-MM-DD format for the API
const START_DATE = firstDay.toISOString().split("T")[0];

const BASE_URL = `https://api.nasa.gov/planetary/apod`;
const API_KEY = "api_key=612p2r2bYK4qR9NiJBvqQQ4EbGyWekmaqfkG4dEh";

const nasa = {
  /**
   * Function to fetch the images from the NASA APOD API
   * Default behaviour: get all images from the first day of the current month to the current day
   * @returns An object containing all images and data for each day in the specified range
   */
  async getNasa() {
    const fetchUrl = `${BASE_URL}?start_date=${START_DATE}&${API_KEY}`;
    return await axios.get(fetchUrl);
  },

  /**
   * Function to fetch all images from the NASA APOD API between specified dates
   * @param {string} startDate
   * @param {string} endDate
   * @returns An object containing all images and data between startDate and endDate
   */
  async getNasaWithDate(startDate, endDate) {
    //Clear the local storage to reset likes
    localStorage.clear();
    const fetchUrl = `${BASE_URL}?start_date=${startDate}&end_date=${endDate}&${API_KEY}`;
    return await axios.get(fetchUrl);
  },
};

export default nasa;
