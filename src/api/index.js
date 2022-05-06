import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
  const MY_KEY= process.env.REACT_APP_API_KEY

export const getplacesData = async (sw,ne) => {
  try {
    const result = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },

      headers: {
        "X-RapidAPI-Key":process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
