import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  //fetching product Details
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
      );
      console.log(response);
      setProduct(response);
    } catch (err) {
      console.log('Error ', err.message);
    }
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return <div>produkt details</div>;
};

export default ProductDetails;
