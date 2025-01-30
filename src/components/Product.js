import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItems from './ProductItems';
import { Link } from 'react-router-dom';

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/allProducts');
     
      setProductData(response.data.product);
    } catch (err) {
      console.log('Error : ', err.message);
    }
  };

  if (!productData) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="my-10 mx-[140px] flex gap-[18px] flex-wrap">
      {productData.map((data) => (
        <Link key={data._id} to={`/product/${data._id}`}>
          <ProductItems  productData={data} />
        </Link>
      ))}
    </div>
  );
};

export default Product;
