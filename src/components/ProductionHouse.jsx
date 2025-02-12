import React from 'react';
import disney from './../assets/images/disney.png';
import marvel from './../assets/images/marvel.png';
import nationalG from './../assets/images/nationalG.png';
import pixar from './../assets/images/pixar.png';
import starwar from './../assets/images/starwar.png';

import marvelV from './../assets/videos/marvelV.mp4';
import disneyV from './../assets/videos/disneyV.mp4';
import nationalGV from './../assets/videos/nationalGV.mp4';
import pixarV from './../assets/videos/pixarV.mp4';
import starwarGV from './../assets/videos/starwarGV.mp4'; // Corrected import

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarGV, // Corrected video
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGV,
    },
  ];

  return (
    <div className='flex gap-5 p-2 md:px-16 px-5'>
      {productionHouseList.map((item) => (
        <div
          key={item.id} // Key prop should be here
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className='absolute top-0 rounded-md z-[0] opacity-0 hover:opacity-50'
          />
          <img src={item.image} alt={`${item.image} logo`} className='w-full z-[1]' />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;