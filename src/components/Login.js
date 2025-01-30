import white from '../Images/White.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to="/">
        {' '}
        <img
          src={white}
          alt="logo"
          className="w-[350px] m-auto mt-[60px] mb-0 pb-0 cursor-pointer"
          required
        ></img>
      </Link>

      <div className="border-2 w-4/12 mx-auto mt-0  rounded-2xl shadow-xl p-5 ">
        <h2 className="text-center text-2xl font-bold ">LOGIN</h2>
        <div className="w-full pt-5 ">
          <label className="text-lg mb-4 font-semibold">Email</label>
          <br />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-2 p-2 pl-3 outline-none rounded-lg"
            required
          ></input>
          <br />
          <label className="text-lg font-semibold">Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 p-2 pl-3 outline-none rounded-lg"
          ></input>
          <br />
        </div>
        <div className="flex justify-center mt-3">
          <button className="mx-auto mt-2 py-2 px-12 rounded-2xl bg-green-600 font-bold text-white text-xl">
            Login
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-[15px]">
            Create Account :{' '}
            <Link to="/signup">
              <span className="text-[18px] text-black font-bold cursor-pointer">
                Signup
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
