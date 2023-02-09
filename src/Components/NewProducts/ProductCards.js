import Image from 'next/image';
import React from 'react';

const ProductCards = ({ product }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white ">
          <div className="max-h-[240px]">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image
                src={product.image}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {product.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {product.description}
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
