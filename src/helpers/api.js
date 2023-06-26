import axios from 'axios';

async function fetchImmages(query, currentPage, perPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '35918460-7c3da85385fde4b8ea2396448';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);

  return response;
}

export default fetchImmages;
