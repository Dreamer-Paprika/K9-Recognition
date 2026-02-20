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

export const fetchDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/images/${id}`,
      {
        headers: {
          'x-api-key':
            'live_5svkRgOyWadRJv2cY1CruDv2TtoPMx38PhCFljF5vZ58sqzvCm9c65JFx3p5p2El',
        },
      }
    );
    const images = await response.data;
    return images;
  } catch (error) {
    console.error(error);
  }
};



export const nextFetch = async (pageNum) => {
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
          page: pageNum
        },
      }
    );
    const images = await response.data;
    return images;
  } catch (error) {
    console.error(error);
  }
};

export const fetchFacts = async id => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${id}/facts?limit=2&page=0&order=ASC&lang=en`,
      {
        headers: {
          'x-api-key':
            'live_5svkRgOyWadRJv2cY1CruDv2TtoPMx38PhCFljF5vZ58sqzvCm9c65JFx3p5p2El',
        },
      }
    );
    const images = await response.data;
    return images;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBreeds = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
      headers: {
        'x-api-key':
          'live_5svkRgOyWadRJv2cY1CruDv2TtoPMx38PhCFljF5vZ58sqzvCm9c65JFx3p5p2El',
      },
    });
    const images = await response.data;
    return images;
  } catch (error) {
    console.error(error);
  }
};
