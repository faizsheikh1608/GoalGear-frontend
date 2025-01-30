import signup from '../Images/signup.jpg';
import signup_2 from '../Images/Signup2.jpg';

const Signup = () => {
  return (
    <div className="w-10/12 border-2 mx-auto rounded-3xl h-svh overflow-hidden my-5 flex gap-0">
      <div className="w-6/12 relative h-full box-border object-cover">
        <img
          className="w-full h-full object-cover"
          src={signup_2}
          alt="Signup"
        ></img>
        <div className="absolute w-10/12 top-[25px] left-[0px] bg-black bg-gradient-to-l from-green-800	 py-6 px-4 text-xl rounded-e-full font-bold text-white">
          <h3>
            Join us today and take the first step towards something
            extraordinary!
          </h3>
        </div>
      </div>
      <div className="bg-skyblue w-6/12 flex flex-col justify-center items-center">
        <h1 className="flex justify-center font-bold text-2xl">Signup</h1>
        <div>
          <form className="flex flex-col gap-[3px] justify-center mt-2 ">
            <label className="m-0">First Name </label>
            <input
              className="w-full p-2 pl-1 border-b-[1px] border-black  bg-transparent outline-none m-0 "
              type="text"
              placeholder="First Name"
              required
            ></input>

            <label>Last Name</label>
            <input
              className="w-full p-2 pl-1 border-b-[1px] border-black  bg-transparent outline-none "
              type="text"
              placeholder="Last Name"
              required
            ></input>

            <label>Email</label>
            <input
              className="w-full p-2 pl-1 border-b-[1px] border-black  bg-transparent outline-none "
              type="text"
              placeholder="Email"
              required
            ></input>

            <label>Age</label>
            <input
              className="w-full p-2 pl-1 border-b-[1px] border-black  bg-transparent outline-none "
              type="text"
              placeholder="Age"
              required
            ></input>

            <div className="flex gap-2 bg-transparent py-3">
              <label>Gender</label>
              <div>
                <input
                  className="bg-transparent "
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                <label for="male">Male</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label>
              </div>
            </div>

            <label>Password</label>
            <input
              className="w-full p-2 pl-1 border-b-[1px] border-black  bg-transparent outline-none "
              type="password"
              placeholder="Password"
              required
            ></input>

            <label>Re-enter Password</label>
            <input
              className="w-full p-2 pl-1 border-b-[1px] border-black  bg-transparent outline-none "
              type="password"
              placeholder="Password"
              required
            ></input>

            <button className="mt-2 bg-green-600 rounded-xl py-2 font-bold text-white text-xl">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
