import Image from 'next/image';
import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const CardContent = ({ image, title }) => {
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
          <h5 className="text-white text-xl font-bold mb-2">{title}</h5>

          <div className="flex space-x-2 text-white hover:text-gray-400">
            <button
              type="button"
              className=" inline-block  font-medium text-xs leading-tight uppercase rounded transition duration-300 ease-in-out"
            >
              Shop now
            </button>
            <BsFillArrowRightCircleFill className="h-4 w-4 duration-300 ease-in-out" />
          </div>
        </div>
        <div className="riband bg-[#D10024]/90" />
      </div>
    </div>
  );
};

export default CardContent;
