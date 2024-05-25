import axios from 'axios';

const API_KEY = '44031619-a947df2c149ce3ba62f1c08d8';
const BASE_URL = 'https://pixabay.com/api/';

const loader = document.getElementById('loader');

export async function fetchImages(query) {
  try {
    loader.style.display = 'block';
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    loader.style.display = 'none';
  }
}
