
import { Link } from 'react-router-dom';
import whiteLogo from '../images/white.png';

const Header = () => {
    

    return (
        <div className='h-[100px] overflow-hidden w-full flex justify-between items-center p-0 m-0 shadow-lg'>
            <div className='w-[400px]  flex justify-start items-center relative p-0 m-0' >
                <img className='w-[280px] h-full  object-cover'  
                src={whiteLogo}
                alt="Logo"></img>
            </div>
            <div id="Search-div" className='w-6/12 flex items-center'> 
                <input type="search" placeholder='Search' className='w-10/12 border-[1px] rounded-l-2xl p-2 pl-4 outline-none text-base'></input>
                <div><i className="bi bi-search bg-gray-100 text-2xl py-[6px] px-5 rounded-r-2xl"></i></div>
            </div>
            <div className='pr-[10px] flex gap-2'>
                <div className="bg-green-600 py-[6px] px-5 text-xl rounded-2xl cursor-pointer text-white">Cart <i className="bi bi-cart4 " ></i></div>
                <Link to="/login"><div className="bg-green-600 py-[6px] px-5 text-xl rounded-2xl cursor-pointer text-white">Login </div></Link>
            </div>
        </div>
    )
}

export default Header;