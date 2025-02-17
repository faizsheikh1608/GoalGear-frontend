import { useDispatch } from 'react-redux';
import all from '../images/all.png';
import football from '../images/football.png';
import gloves from '../images/gloves.png';
import shoes from '../images/shoes.png';
import shorts from '../images/shorts.png';
import socks from '../images/socks.png';
import t_shirt from '../images/t-shirts.png';
import axios from 'axios';
import { setData } from '../utils/productSlice';

const Category = () => {
  const dispatch = useDispatch();

  //handel All
  const handleAll = async () => {
    try {
      const res = await axios.get('http://localhost:3000/allProducts', {
        withCredentials: true,
      });
      dispatch(setData(res.data.product));
    } catch (err) {
      console.log(err);
    }
  };

  //handle category
  const handlecategory = async (category) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/filter/product?category=${category}`,
        { withCredentials: true }
      );
      console.log(res.data.product);
      dispatch(setData(res.data.product));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-evenly mt-8">
      <div className="cursor-pointer flex flex-col gap-3" onClick={handleAll}>
        <div className="w-24  rounded-full shadow-lg overflow-hidden">
          <img src={all} alt="All" className="object-cover "></img>
        </div>
        <h3 className="text-center ">ALL</h3>
      </div>
      <div className="cursor-pointer  flex flex-col gap-3"
      onClick={() => handlecategory('Shoes')}>
        <div className="w-24  rounded-full shadow-lg overflow-hidden">
          <img src={shoes} alt="Shoes" className="object-cover "></img>
        </div>
        <h3 className="text-center ">SHOES</h3>
      </div>
      <div className="cursor-pointer  flex flex-col gap-[19px]">
        <div
          className="w-24  rounded-full shadow-lg overflow-hidden"
          onClick={() => handlecategory('Shorts')}
        >
          <img
            src={shorts}
            alt="Shorts"
            className="object-cover w-[80px] py-3 pl-5"
          ></img>
        </div>
        <h3 className="text-center ">SHORTS</h3>
      </div>
      <div className="cursor-pointer  flex flex-col gap-3">
        <div
          className="w-24  rounded-full shadow-lg overflow-hidden"
          onClick={() => handlecategory('T-Shirts')}
        >
          <img src={t_shirt} alt="T-shirts" className="object-cover"></img>
        </div>
        <h3 className="text-center ">T-SHIRTS</h3>
      </div>
      <div
        className="cursor-pointer  flex flex-col gap-3"
        onClick={() => handlecategory('Football')}
      >
        <div className="w-24  rounded-full shadow-lg overflow-hidden">
          <img src={football} alt="Football" className="object-cover"></img>
        </div>
        <h3 className="text-center ">FOOTBALL</h3>
      </div>
      <div className="cursor-pointer  flex flex-col gap-4">
        <div
          className="w-24  rounded-full shadow-lg "
          onClick={() => handlecategory('Socks')}
        >
          <img src={socks} alt="Socks" className="object-cover"></img>
        </div>
        <h3 className="text-center">SOCKS</h3>
      </div>
      <div className="cursor-pointer  flex flex-col gap-4"
      onClick={() => handlecategory('Assecceires')}>
        <div className="w-24  rounded-full shadow-lg ">
          <img src={gloves} alt="Gloves" className="object-cover"></img>
        </div>
        <h3 className="text-center ">ASSECCEIRES</h3>
      </div>
    </div>
  );
};

export default Category;
