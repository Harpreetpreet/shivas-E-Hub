import Image from 'next/image';
import React from 'react';

const CardContent = ({ image, title, description, button }) => {
  return (
    <div className="group shadow overflow-hidden mt-12 ">
      <div className="relative ">
        <Image
          className="rounded-t-lg items-center bg-transparent max-w-xs group-hover:scale-110 transition duration-300 ease-in-out"
          src={image}
          alt=""
          height={350}
          width={350}
        />
        <div className="z-40 p-6 absolute top-0 left-0 right-0 bottom-0">
          <h5 className="text-white text-xl font-medium mb-2">{title}</h5>
          <p className="text-white text-base mb-4">{description}</p>
          <button
            type="button"
            className=" inline-block text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
          >
            Shop now
          </button>
        </div>
        <div className="riband bg-[#D10024]/90" />
      </div>
    </div>
  );
};

export default CardContent;
