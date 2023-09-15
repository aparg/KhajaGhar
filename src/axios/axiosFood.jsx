import axios from 'axios';
import {ILLUSTRATIONS} from '../images/images';

export default axiosFood = async (start, limit) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    );
    let enhancedData = res.data.map(element => {
      return {
        name: element.title.slice(0, 5),
        price: parseFloat(
          (Math.random(Math.floor(Math.random() * 1)) + 2).toFixed(2),
        ),
        id: element.id,
        image: ILLUSTRATIONS.entryPageIllustration1,
      };
    });
    return enhancedData;
  } catch (err) {
    console.log(err);
    return null;
  }
};
