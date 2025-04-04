import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from 'react-router-dom';

function Contact() {
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
            number: data.number,
      };
      await axios.post("http://localhost:4001/contact/contact", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Submitted")
          window.location.reload();
          setTimeout(() => {
            
          },3000);
          navigate(from, { replace: true });
        }
        localStorage.setItem("Contacts", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Not Submitted")
          setTimeout(() => {
            
          },3000);
          window.location.reload();
          
        }
      });
};
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <div className=" flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/raeqjora"
            // method="POST"
            className="bg-black-200  px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl md:text-3xl text-green-500 font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-green-500">FullName</label>
              <input
                {...register("fullname", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-green-500">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-green-500">Mobile Number</label>
              <textarea
                {...register("number", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                name="number"
                type="number"
                placeholder="Enter your Number"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-green-500 text-black font-bold rounded-xl px-3 py-2 hover:bg-white hover:text-black-500 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;