import axios from 'axios';

const getRestaurants = async number => {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/food/restaurants/search?apiKey=344984614a834b0fafab1177db3dfb27',
    );
    return response.data.restaurants;
  } catch (error) {
    console.error(error);
  }
};

export default getRestaurants;
