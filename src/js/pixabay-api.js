import axios from 'axios';

const API_KEY = '44031619-a947df2c149ce3ba62f1c08d8'; // Замініть 'your-api-key' на ваш фактичний API ключ.
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
  return response.data.hits;
};
