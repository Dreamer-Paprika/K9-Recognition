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

export const fetchStats = async name => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/dogs?name=${name}`,
      {
        headers: {
          'x-api-key': 'gdvQqEx3KBpR51ZfOeJgIA==10aHi9pat7JXS0OQ',
        },
      }
    );
    const facts = await response.data;
    return facts;
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
