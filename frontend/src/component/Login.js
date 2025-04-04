// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form";

// function Login() {
//     const {
//             register,
//             handleSubmit,
//             formState: { errors },
//           } = useForm()
    
//           const onSubmit = (data) => {
//             console.log(data); // Log form data, no backend request
//         };
//   return (
//     <div>
//         <dialog id="my_modal_3" className="modal">
//             <div className="modal-box">
//                 <form method="dialog">
//                     {/* if there is a button in form, it will close the modal */}
//                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                 </form>
//                 <h3 className="font-bold text-2xl text-black">Login</h3>
//                 <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
//                     <div className='mt-6 space-y-2'>
//                         <span>Email</span>
//                         <br/>
//                         <input type="email"
//                         placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1 text-black'
//                         {...register("email", { required: true })}/>
//                         <br/>
//                         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     <div className='mt-6 space-y-2'>
//                         <span>Passward ~</span>
//                         <br/>
//                         <input type="password"
//                         placeholder='Enter Your Passward' className='w-80 px-3 border rounded-md outline-none py-1 text-black'
//                         {...register("email", { required: true })}/>
//                         <br/>
//                         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//                     </div>
//                     <div className='flex justify-around mt-6'>
//                         <button className='bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800 hover:text-whiteduration-300'>Login</button>
//                         <p className='text-black'>
//                             Not Registerd? <Link to="/signup" className='text-violet-700 ml-4 cursor-pointer underline'>SignUp</Link>
//                         </p>
//                     </div>
//                     </form>
//              </div>
//         </dialog>
//     </div>
//   )
// }

// export default Login
import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
          email: data.email,
          password: data.password,
    };
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Loggin Successfully")
        setTimeout(() => {}, 3000);
        window.location.reload();
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        alert("Try Again")
      }
    });
  };
    
  //     const onSubmit = async (data) => {
  //       const userInfo = {
  //         email: data.email,
  //         password: data.password,
  //   };
  //   await axios.post("/user/login", userInfo)
  //   .then((res) => {
  //     console.log(res.data);
  //     if (res.data) {
  //       toast.success("Login Successfully");
  //       setTimeout(() => {}, 3000);
  //       window.location.reload();
  //     }
  //     localStorage.setItem("Users", JSON.stringify(res.data.user));
  //   })
  //   .catch((err) => {
  //     if (err.response) {
  //       console.log(err);
  //       toast.error("Error: " + err.response.data.message);
  //     }
  //   });
  // };
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
            <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
               </form>
                <h3 className="font-bold text-lg text-black">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-6 space-y-2'>
                        <span className='text-black'>Email</span>
                        <br/>
                        <input type="email"
                        placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none py-1 text-black'
                        {...register("email", { required: true })}/>
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-6 space-y-2'>
                        <span className='text-black'>Passward ~</span>
                        <br/>
                        <input type="password"
                        placeholder='Enter Your Passward' className='w-80 px-3 border rounded-md outline-none py-1 text-black'
                        {...register("password", { required: true })}/>
                        <br/>
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-6'>
                        <button className='bg-black text-white rounded-md px-3 py-1 hover:bg-gray-300 hover:text-black duration-300'>Login</button>
                        <p className='text-black'>
                            Not Registerd? <Link to="/Signup" className='underline text-blue-800'>SignUp</Link>{""}
                        </p>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default Login;