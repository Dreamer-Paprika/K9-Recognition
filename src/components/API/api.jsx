import axios from 'axios';

export const fetchImages = async () => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/images/search`,
      {
        headers: {
          'x-api-key':
            'live_5svkRgOyWadRJv2cY1CruDv2TtoPMx38PhCFljF5vZ58sqzvCm9c65JFx3p5p2El',
        },
        params: {
          limit: 10,
        },
      }
    );
    const images = await response.data;
    return images;
  } catch (error) {
    console.error(error);
  }
};

export const loadSrch = async (srchTerm, pageItems) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: pageItems,
        page: 1,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};
