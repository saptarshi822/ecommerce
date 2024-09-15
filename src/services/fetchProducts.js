import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.in/api/products?limit=150');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Example usage:
export default fetchProducts;