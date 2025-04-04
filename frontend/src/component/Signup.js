import React from 'react'
import Login from './Login'
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      const userInfo = {
          fullname: data.fullname,
          email: data.email,
          password: data.password,
    };
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Signup Successfully")
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        alert("User Already Exist")
      }
    });
};
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-[500px] bg-white p-8 rounded-lg shadow-lg" id='model_signup'>
        <h3 className="font-bold text-lg text-black">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 space-y-2">
            <label className="text-black">Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-3 border rounded-md outline-none py-1 text-black"
              {...register("fullname", { required: true })}/>
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mt-6 space-y-2">
            <label className="text-black">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 border rounded-md outline-none py-1 text-black"
              {...register("email", { required: true })}/>
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="mt-6 space-y-2">
            <label className="text-black">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-3 border rounded-md outline-none py-1 text-black"
              {...register("password", { required: true })}/>
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className="flex justify-around mt-6">
            <button className="bg-black text-white rounded-md px-3 py-1 hover:bg-gray-300 hover:text-black duration-300">
              Sign Up
            </button>
            <p className='text-black'>
                Have an account <Link to="/" className='text-violet-700 ml-4 cursor-pointer underline'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
