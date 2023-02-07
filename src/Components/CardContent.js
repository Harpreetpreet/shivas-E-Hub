import { images } from 'next.config';
import React from 'react';

const CardContent = ({ image, title, description, button }) => {
  return (
    <div className="container mx-auto p-8">
      <div className="rounded-lg shadow-lg bg-slate-300 py-10">
        <div className="flex justify-center">
          <a href="#!">
            <img
              className="rounded-t-lg items-center bg-transparent "
              src={image}
              alt=""
              width={200}
              height={200}
            />
          </a>
        </div>

        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
