import Image from 'next/image';
import React from 'react';

const HotDeals = () => {
  return (
    <section className="bg-slate-300 py-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Image
              src="/images/asusLaptop.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <div
              className="flex
          justify-around"
            >
              <div className="flex flex-col justify-center bg-red-600 h-24 w-24 rounded-full items-center text-2xl text-white font-bold">
                02<span className="text-xs">days</span>
              </div>
              <div className="flex flex-col justify-center bg-red-600 h-24 w-24 rounded-full items-center text-2xl text-white font-bold">
                10 <span className="text-xs">Hours</span>
              </div>
              <div className="flex flex-col justify-center bg-red-600 h-24 w-24 rounded-full items-center text-2xl text-white font-bold">
                34<span className="text-xs">Mins</span>
              </div>
              <div className="flex flex-col justify-center bg-red-600 h-24 w-24 rounded-full items-center text-2xl text-white font-bold">
                52<span className="text-xs">Sec</span>
              </div>
            </div>
            <div className=" text-center space-y-2 mt-8">
              <h1 className="text-3xl font-bold ">HOT DEAL THIS WEEK</h1>
              <h3 className="text-3xl font-medium text-gray-500">
                NEW COLLECTION UP TO 50% OFF
              </h3>
              <button className="border-2 rounded-full  h-14 w-40 hover:bg-red-600 hover:text-white font-medium">
                SHOP NOW
              </button>
            </div>
          </div>
          <div>
            <Image
              className="bg-transparent hidden-md"
              src="/images/headset.png"
              alt=""
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
