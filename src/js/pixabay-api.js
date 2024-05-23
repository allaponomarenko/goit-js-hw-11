import axios from 'axios';

const API_KEY = 'your-api-key'; // Замініть 'your-api-key' на ваш фактичний API ключ
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 12,
    },
  });
  return response.data;
}
