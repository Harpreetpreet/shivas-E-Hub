import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    // <div className="md:pb-20 pb-10 ">
    //   <nav
    //     className="flex w-full  px-8 justify-around md:py-6 py-2
    //     bg-slate-300 shadow-md
    //          "
    //   >
    //     <div className="flex items-center">
    //       <a className="cursor-pointer ">
    //         <h1 className="">
    //           <Image
    //             src="/images/Logo.png"
    //             alt="Store Logo"
    //             width={80}
    //             height={80}
    //           />
    //         </h1>
    //       </a>
    //     </div>

    //     {
    //       <div className="items-center  space-x-8 lg:flex ">
    //         <a
    //           className="flex text-gray-600 font-semibold hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300"
    //         >
    //           Home
    //         </a>

    //         <a
    //           className="flex text-gray-600 hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300
    //                 font-semibold "
    //         >
    //           Hot Deals
    //         </a>

    //         <a
    //           className="flex text-gray-600 font-semibold hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300"
    //         >
    //           Categories
    //         </a>

    //         <a
    //           className="flex text-gray-600 font-semibold hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300"
    //         >
    //           Laptops
    //         </a>

    //         <a
    //           className="flex text-gray-600 font-semibold hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300"
    //         >
    //           Smartphones
    //         </a>

    //         <a
    //           className="flex text-gray-600 font-semibold hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300"
    //         >
    //           Cameras
    //         </a>
    //       </div>
    //     }

    //     <div className="flex items-center space-x-5">
    //       <a
    //         className="flex text-gray-600 font-semibold hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300"
    //       >
    //         <svg
    //           className="fill-current h-5 w-5 mr-2 mt-0.5"
    //           xmlns="http://www.w3.org/2000/svg"
    //           version="1.1"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
    //         </svg>
    //         Register
    //       </a>

    //       <a
    //         className="flex text-gray-600  hover:text-blue-500
    //                 cursor-pointer transition-colors duration-300
    //                 font-semibold"
    //       >
    //         <svg
    //           className="fill-current h-5 w-5 mr-2 mt-0.5"
    //           xmlns="http://www.w3.org/2000/svg"
    //           version="1.1"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
    //         </svg>
    //         Login
    //       </a>
    //     </div>
    //   </nav>
    // </div>

    <div>
      <nav className="bg-slate-300 md:py-10 py-4">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-around ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsActive(!isActive)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {!isActive && (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {isActive && (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="cursor-pointer flex md:w-auto md:justify-start justify-center flex-shrink-0 items-center text-3xl text-white font-medium">
              <Image src="/images/Logo.png" alt="" width={80} height={80} />
            </div>
            <div className="hidden md:flex sm:items-stretch md:justify-around">
              <div className="hidden md:flex sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  <a
                    href="#"
                    className=" rounded-md text-lg flex text-gray-600 font-semibold hover:text-blue-500
              cursor-pointer transition-colors duration-300"
                    aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="#FEATURES"
                    className="rounded-md text-lg flex text-gray-600 font-semibold hover:text-blue-500
              cursor-pointer transition-colors duration-300"
                  >
                    Hot Deals
                  </a>

                  <a
                    href="#"
                    className="rounded-md text-lg flex text-gray-600 font-semibold hover:text-blue-500
              cursor-pointer transition-colors duration-300"
                  >
                    Categories
                  </a>

                  <a
                    href="#"
                    className="rounded-md text-lg flex text-gray-600 font-semibold hover:text-blue-500
              cursor-pointer transition-colors duration-300"
                  >
                    Laptops
                  </a>
                  <a
                    href="#"
                    className="rounded-md text-lg flex text-gray-600 font-semibold hover:text-blue-500
              cursor-pointer transition-colors duration-300"
                  >
                    Cameras
                  </a>
                  <a
                    href="#"
                    className="rounded-md text-lg flex text-gray-600 font-semibold hover:text-blue-500
              cursor-pointer transition-colors duration-300"
                  >
                    Accessories
                  </a>
                </div>
                <div className="flex items-center space-x-5 ">
                  <Link
                    href="/register"
                    className="flex text-gray-600 font-bold hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
                  >
                    <svg
                      className="fill-current h-5 w-5 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                    </svg>
                    Register
                  </Link>

                  <Link
                    href="/login"
                    className="flex text-gray-600  hover:text-blue-500
                    cursor-pointer transition-colors duration-300
                    font-bold"
                  >
                    <svg
                      className="fill-current h-5 w-5 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                    </svg>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isActive && (
          <div className=" bg-red-500 md:hidden flex flex-col items-center px-3 py-10 shadow-xl z-50 absolute right-0 left-0 top-16">
            <a
              href="#"
              className=" text-white px-3 py-2 rounded-md text-sm font-medium underline"
              aria-current="page"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Hot Deals
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Categories
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Laptops
            </a>
            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Cameras
            </a>
            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Accessories
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
