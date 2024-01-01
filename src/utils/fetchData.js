import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": '008b427c31mshd908b6d83809ddbp17b82cjsn1ced75dacd5f',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
