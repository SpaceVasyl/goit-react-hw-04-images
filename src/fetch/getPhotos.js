const API_KEY = '33515519-4cabbaba1f47ec33da2852d88';
const BASE_URL = 'https://pixabay.com/api';
export const getPhotos = (inputValue, page) => {
    const url = `${BASE_URL}/?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    return fetch(url)
  };
  