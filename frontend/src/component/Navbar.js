// import React from "react";
// import image from "../image/ChatGPT Image Apr 3, 2025, 03_35_14 PM.png";
// import { BiSolidCartAdd } from "react-icons/bi";
// import Login from "./Login";

// function Navbar() {

//   return (
//     <div>
//       <div className={"md:max-w-screen-2xl container mx-auto px-4 md:px-20 h-24 shadow-md fixed top-0 left-0 right-0 z-50 bg-black"}>
//         <div className="flex justify-between items-center h-16">
//           <div className="flex space-x-2 mt-9">
//             <img src={image} className="h-16 w-16 md:h-24 md:w-24 rounded-full" alt="" />
//           </div>
//           <div className="flex-1 flex justify-center mr-6 md:mr-0">
//             <input
//             type="text"
//             placeholder="Search"
//             className="px-2 py-1 md:px-4 md:py-2 rounded-full focus:outline-none text-black w-44 md:w-1/2 mt-9 bg-gray-800"
//             />
//           </div>

//           <div className="flex justify-start md:justify-end gap-1 md:gap-4 mr-48 md:mr-0">
//             <BiSolidCartAdd className="hidden sm:block text-white mt-9 mr-6 font-bold text-4xl transition-transform duration-300 transform hover:scale-125 cursor-pointer"/>
//             <a className="px-2 py-2 md:px-2 md:py-2 text-sm md:text-xl bg-gray-800 text-white mt-9 rounded-md w-14 md:w-20 font-bold hover:bg-white hover:text-black duration-500 items-center text-center cursor-pointer"
//             onClick={()=>document.getElementById('my_modal_3').showModal()}>
//               Login</a>
//               <Login />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// // import React, { useState } from "react";
// // import image from "../image/ChatGPT Image Apr 3, 2025, 03_35_14 PM.png";
// // import { BiSolidCartAdd } from "react-icons/bi"; // Cart Icon
// // import { FiAlignRight } from "react-icons/fi"; // Sidebar toggle icon for mobile view
// // import Login from "./Login";
// // import Slidebar from "./Slidebar"; // Import Slidebar component

// // function Navbar() {
// //   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

// //   // Toggle the sidebar visibility on mobile
// //   const toggleSidebar = () => {
// //     setIsSidebarVisible(!isSidebarVisible);
// //   };

// //   return (
// //     <div>
// //       <div className={"md:max-w-screen-2xl container mx-auto px-4 md:px-20 h-24 shadow-md fixed top-0 left-0 right-0 z-50 bg-black"}>
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo Section */}
// //           <div className="flex space-x-2 mt-9">
// //             <img src={image} className="h-16 w-16 md:h-24 md:w-24 rounded-full" alt="Logo" />
// //           </div>

// //           {/* Search Box */}
// //           <div className="flex-1 flex justify-center mr-6 md:mr-0">
// //             <input
// //               type="text"
// //               placeholder="Search"
// //               className="px-2 py-1 md:px-4 md:py-2 rounded-full focus:outline-none text-black w-32 md:w-1/2 mt-9 bg-gray-800"
// //             />
// //           </div>

// //           {/* Mobile and Desktop Icons Section */}
// //           <div className="flex justify-start md:justify-end gap-1 md:gap-4 mr-48 md:mr-0">
// //             {/* Cart Icon (Visible only on larger screens) */}
// //             <BiSolidCartAdd className="hidden md:block text-white mt-9 mr-6 font-bold text-4xl transition-transform duration-300 transform hover:scale-125 cursor-pointer" />

// //             {/* Mobile Sidebar Toggle Icon (Visible only on mobile devices) */}
// //             <FiAlignRight
// //               className="block md:hidden text-white mt-9 mr-2 font-bold text-2xl transition-transform duration-300 transform hover:scale-125 cursor-pointer"
// //               onClick={toggleSidebar} // Toggle sidebar visibility
// //             />

// //             {/* Login Button */}
// //             <a
// //               className="px-2 py-2 md:px-2 md:py-2 text-sm md:text-xl bg-gray-800 text-white mt-9 rounded-md w-14 md:w-20 font-bold mr-8 hover:bg-white hover:text-black duration-500 items-center text-center cursor-pointer"
// //               onClick={() => document.getElementById('my_modal_3').showModal()}
// //             >
// //               Login
// //             </a>
// //             <Login />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Sidebar Component */}
// //       <Slidebar
// //         onCategorySelect={(categorySlug) => console.log(categorySlug)} // Handle category selection
// //         isSidebarVisible={isSidebarVisible} // Pass visibility state
// //         toggleSidebar={toggleSidebar} // Pass toggle function
// //       />
// //     </div>
// //   );
// // }

// // export default Navbar;

import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import Login from "../component/Login";
import logo from "../image/ChatGPT Image Apr 3, 2025, 03_35_14 PM.png";
import { Link } from 'react-router-dom';
function Navbar() {
  
  return (
    <>
      <div className='justify-between flex px-6 py-2 fixed top-0 left-0 right-0 z-50 bg-black'>
        <div className='border border-black flex space-x-8'>
          <FiAlignJustify className='rounded-full h-10 w-10 md:h-10 md:w-10 mt-4 md:mt-8 hover:bg-gray-500 duration-300 hover:text-black p-2'/>
          <img src={logo} className='h-16 w-16 md:h-24 md:w-24 rounded-full'/>
        </div>
        <div className='border border-black space-x-4 mt-5 md:mt-8 md:space-x-20 hidden md:flex'>
          <h1 className='text-white text-xl md:text-4xl cursor-pointer font-bold hover:text-gray-500 duration-300 hover:scale-105'>Home</h1>
          <h1 className='text-white text-xl md:text-4xl cursor-pointer font-bold hover:text-gray-500 duration-300 hover:scale-105'><Link to="/review">Review</Link></h1>
          <h1 className='text-white text-xl md:text-4xl cursor-pointer font-bold hover:text-gray-500 duration-300 hover:scale-105'>
  <Link to="/contact">Contact</Link>
</h1>
        </div>
        <div className='border border-black mt-3 mb-4 md:mt-8 flex '>
          <a
              className="px-2 py-2 md:px-2 md:py-2 text-sm md:text-xl bg-gray-800 text-white rounded-md w-14 md:w-20 font-bold mr-6 md:mr-8 hover:bg-white hover:text-black duration-500 items-center text-center cursor-pointer"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Login
            </a>
            <Login />
        </div>
      </div>
    </>
  )
}

export default Navbar
