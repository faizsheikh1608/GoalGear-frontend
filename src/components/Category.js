import all from '../images/all.png';
import football from '../images/football.png';
import gloves from '../images/gloves.png';
import shoes from '../images/shoes.png';
import shorts from '../images/shorts.png';
import socks from '../images/socks.png';
import t_shirt from '../images/t-shirts.png';


const Category = () => {

    return (
    <div className="flex items-center justify-evenly mt-8">
        <div className="cursor-pointer flex flex-col gap-3">
          <div className='w-24  rounded-full shadow-lg overflow-hidden'><img src={all} alt='All' className='object-cover '></img></div>
          <h3 className="text-center ">ALL</h3>
        </div>
        <div className="cursor-pointer  flex flex-col gap-3">
            <div className='w-24  rounded-full shadow-lg overflow-hidden'><img src={shoes} alt='Shoes' className='object-cover '></img></div>
            <h3 className="text-center ">SHOES</h3>
         </div>
        <div className="cursor-pointer  flex flex-col gap-[19px]">
           <div className='w-24  rounded-full shadow-lg overflow-hidden'><img src={shorts} alt='Shorts' className='object-cover w-[80px] py-3 pl-5'></img></div>
             <h3 className="text-center ">SHORTS</h3>
        </div>
        <div className="cursor-pointer  flex flex-col gap-3">
            <div className='w-24  rounded-full shadow-lg overflow-hidden'><img src={t_shirt} alt='T-shirts' className='object-cover'></img></div>
             <h3 className="text-center ">T-SHIRTS</h3>
        </div>
        <div className="cursor-pointer  flex flex-col gap-3">
            <div className='w-24  rounded-full shadow-lg overflow-hidden'><img src={football} alt='Football' className='object-cover'></img></div>
            <h3 className="text-center ">FOOTBALL</h3>
        </div>
        <div className="cursor-pointer  flex flex-col gap-4">
            <div className='w-24  rounded-full shadow-lg '><img src={socks} alt='Socks' className='object-cover'></img></div>
             <h3 className="text-center">SOCKS</h3>
        </div>
        <div className="cursor-pointer  flex flex-col gap-4">
            <div className='w-24  rounded-full shadow-lg '><img src={gloves} alt='Gloves' className='object-cover'></img></div>
             <h3 className="text-center ">GLOVES</h3>
        </div>
    </div>
    )
};


export default Category;