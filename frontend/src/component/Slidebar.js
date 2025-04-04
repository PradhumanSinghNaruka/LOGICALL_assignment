// import React from 'react'
// import { GoStarFill } from "react-icons/go";
// import { FaFire } from "react-icons/fa";
// import { FaFastForward } from "react-icons/fa";
// import { TbNumber31Small } from "react-icons/tb";
// function Slidebar({ onCategorySelect }) {
  
//   const categories = [
//     { name: "Free Online Games", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1aenRz.img?w=1800&h=900&m=4&q=79", slug: "free-online-games" },
//     { name: "Action", image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg", slug: "action" },
//     { name: "Strategy", image: "https://assets.rockpapershotgun.com/images/2020/01/Warcraft-III-Best-Strategy-Games-2020.jpg", slug: "strategy" },
//     { name: "RPG", image: "https://tse1.mm.bing.net/th?id=OIP.bZALq5dAxyf8Zp79RF3OcwHaEK&pid=Api&P=0&h=220", slug: "role-playing-games-rpg" },
//     { name: "Shooter", image: "https://wallpaperaccess.com/full/1957854.jpg", slug: "shooter" },
//     { name: "Adventure", image: "https://wallpapers.com/images/hd/adventure-games-1920-x-1080-wallpaper-m6s7j1ezgzmhbjm2.jpg", slug: "adventure" },
//     { name: "Puzzle", image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2015/08/puzzle-games.jpg", slug: "puzzle" },
//     { name: "Racing", image: "https://tse2.mm.bing.net/th?id=OIP.1cHl0_rtqsH7Yyetz97jdQHaEK&pid=Api&P=0&h=220", slug: "racing" },
//     { name: "Sports", image: "https://us.v-cdn.net/6036147/uploads/A7UPGM8J41AZ/d-29-1-1-1200x675.jpg", slug: "sports" },
//   ];

//   return (
//     <>
//     <div className='py-24 w-[15%]'>     
//       <div className='items-center'>
//         <h2 className="text-white text-5xl font-bold mb-5 ml-6 mt-8">Filters</h2>

//       <div className="flex flex-col space-y-2">
//         {categories.map((category) => (
//           <div
//             key={category.slug}
//             className="flex items-center gap-3 p-2 rounded-lg transition duration-300 cursor-pointer hover:bg-gray-800"
//             onClick={() => onCategorySelect(category.slug)}
//           >
//             <img src={category.image} alt={category.name} className="w-10 h-10 object-cover rounded-md" />
//             <p className="text-white font-medium">{category.name}</p>
//           </div>
//         ))}
//       </div>
//         <div className="space-x-2 items-center mt-10 text-xl ml-1 cursor-pointer">
//           <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
//             <GoStarFill className="text-xl text-gray-400 transition duration-300 group-hover:text-white" />
//             <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">New Releases</h1>
//           </div>
//           <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
//             <FaFire className="text-xl text-gray-400 transition duration-300 group-hover:text-white" />
//             <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">This Week</h1>
//           </div>
//           <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
//             <FaFastForward className="text-xl text-gray-400 transition duration-300 group-hover:text-white" />
//             <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">Next Week</h1>
//           </div>
//           <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
//             <TbNumber31Small className="text-3xl text-gray-400 transition duration-300 group-hover:text-white" />
//             <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">Calendar</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Slidebar

import React from 'react';
import { GoStarFill } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { TbNumber31Small } from "react-icons/tb";

function Slidebar({ onCategorySelect }) {
  const categories = [
    { name: "Free Online Games", image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1aenRz.img?w=1800&h=900&m=4&q=79", slug: "free-online-games" },
    { name: "Action", image: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg", slug: "action" },
    { name: "Strategy", image: "https://assets.rockpapershotgun.com/images/2020/01/Warcraft-III-Best-Strategy-Games-2020.jpg", slug: "strategy" },
    { name: "RPG", image: "https://tse1.mm.bing.net/th?id=OIP.bZALq5dAxyf8Zp79RF3OcwHaEK&pid=Api&P=0&h=220", slug: "role-playing-games-rpg" },
    { name: "Shooter", image: "https://wallpaperaccess.com/full/1957854.jpg", slug: "shooter" },
    { name: "Adventure", image: "https://wallpapers.com/images/hd/adventure-games-1920-x-1080-wallpaper-m6s7j1ezgzmhbjm2.jpg", slug: "adventure" },
    { name: "Puzzle", image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2015/08/puzzle-games.jpg", slug: "puzzle" },
    { name: "Racing", image: "https://tse2.mm.bing.net/th?id=OIP.1cHl0_rtqsH7Yyetz97jdQHaEK&pid=Api&P=0&h=220", slug: "racing" },
    { name: "Sports", image: "https://us.v-cdn.net/6036147/uploads/A7UPGM8J41AZ/d-29-1-1-1200x675.jpg", slug: "sports" },
  ];

  return (
    <div className="py-24 w-0 md:w-[18%]"> {/* Use md:w-1/4 for desktop and full width for mobile */}
      <div className="items-center">
        <h2 className="text-white text-xl md:text-5xl font-bold mb-5 ml-6 mt-8 hidden md:block">Filters</h2>

        {/* Categories List - Will only be shown on desktop */}
        <div className="hidden md:block"> {/* Use hidden on mobile, block on desktop */}
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="flex items-center gap-3 p-2 rounded-lg transition duration-300 cursor-pointer hover:bg-gray-800"
                onClick={() => onCategorySelect(category.slug)}
              >
                <img src={category.image} alt={category.name} className="w-10 h-10 object-cover rounded-md" />
                <p className="text-white font-medium">{category.name}</p>
              </div>
            ))}
          </div>

          {/* Additional Options */}
          <div className="space-x-2 items-center mt-10 text-xl ml-1 cursor-pointer">
            <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
              <GoStarFill className="text-xl text-gray-400 transition duration-300 group-hover:text-white" />
              <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">New Releases</h1>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
              <FaFire className="text-xl text-gray-400 transition duration-300 group-hover:text-white" />
              <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">This Week</h1>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
              <FaFastForward className="text-xl text-gray-400 transition duration-300 group-hover:text-white" />
              <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">Next Week</h1>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg transition duration-300 group hover:bg-gray-800">
              <TbNumber31Small className="text-3xl text-gray-400 transition duration-300 group-hover:text-white" />
              <h1 className="text-gray-400 text-lg font-semibold transition duration-300 group-hover:text-white">Calendar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
