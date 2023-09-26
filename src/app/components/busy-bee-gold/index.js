"use client";
import React, { useEffect, useState } from "react";
import { Hind } from "next/font/google";
import { useRouter } from "next/navigation";


const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const index = ({ data, id, DataArray }) => {
  // declare the necesary state variable to be used
 

  const router = useRouter();
  const [next, setNext] = useState();
  const [pre, setPre] = useState();
  useEffect(() => {
    if (JSON.parse(id) === DataArray.length - 1) {
      setNext(0);
    } else {
      setNext(JSON.parse(id) + 1);
    }

    if (JSON.parse(id) === 0) {
      setPre(DataArray.length - 1);
    } else {
      setPre(JSON.parse(id) - 1);
    }
  });
  return (
    <React.Fragment>
      {/*creating the overlay*/}
      <div className="overlay lg:top-[96px] sm:top-0  h-[400px] z-20 border-t border-gray-300"></div>
      {/*we wanna use image background for the ovwrelay
      n the image is gonna be dynamic 
      or example if we go back to hom epage and click any o rthe portfolio post,
      we wanna an image that is related to the post as it header background overlay
      */}
      <div className="relative  ">
        <img
          src={data?.images[0]}
          alt="bg image"
          className="lg:mt-24 sm:mt-0 h-[400px] object-fill "
          style={{ backgroundSize: "cover"}}
          width={"100%"}
          height={300}
        />
      </div>
{/*displaying the title of the portfolio post */}
      <div className='absolute z-30 sm:top-[200px] top-[42px] sm:left-[65px]  justify-center items-center  w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0  sm:text-left"'>
        <div className="container m-auto ">
          <div className="max-w-[650px] w-[100%] m-auto">
            <p className="opacity-3 font-[400] sm:text-left text-center font-sans text-[#223740] mb-3">
              Showcasing Project:
            </p>
            <h1 className=" opacity-3 text-[#223740] sm:text-left text-center sm:w-3/4 w-full font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      {/*done with it. lets continue in the next lecture*/}

    
    
    
    
    {/*lets begin to work on the portfolio details */}
      {/*setting up the background layout*/}
      <div
        className="grid relative grid-cols-12 lg:space-x-8 space-x-0 "
        style={{
          background:
            "linear-gradient(90deg, rgba(238,247,251,1) 58%, rgba(255,255,255,1) 52%)",
        }}
      >
        <div className="lg:col-span-8 col-span-12  mb-20  scrol lg:px-0 sm:px-20  ">
          {/*we all know that each portfolio post has multiple images right
          lets display the images on the screen
          */}
          {data?.images.map((item) => (
            <div className="flex lg:justify-end justify-center  items-center ">
              <img
                src={item}
                alt="bg image"
                width={800}
                height="auto"
                className="mt-20   rounded-lg"
              />
            </div>
          ))}
        </div>

        {/*lets display the name, desc1 and 2*/}
        <div className="lg:col-span-4 col-span-12   lg:px-0 sm:px-20  ">
          <div className="sm:mt-24 mt-10  lg:max-w-[300px] w-full lg:px-1 px-3  sticky top-36 pb-14">
            <h1 className="font-[300] text-3xl mb-4  text-[#48AFDE]">
              {data?.name}
            </h1>
            <p className="font-[400] text-[14px] font-sans mb-4 text-[#223740]">
              {data?.des}
            </p>
            <p
              id="hightlights"
              className="my-2 text-dark text-[20px] font-[500] font-sans "
            >
              Highlights
            </p>
            <p className="font-[400] text-[14px] font-sans mb-4 text-[#223740]">
              {data?.des1}
            </p>


            {/*lest quicly do this. show them on the browser*/}
            <div className="flex flex-wrap  ">
              <h1 className="font-[300] mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]">
                UI/UX Design
              </h1>
              <h1 className="font-[300] mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]">
                Next.js
              </h1>

              <h1 className="font-[300] mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]">
                GraphQL
              </h1>
              <h1 className="font-[300] mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]">
                {" "}
                GraphCMS
              </h1>
              <h1 className="font-[300] mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]">
                Figma
              </h1>

              <h1 className="font-[300] mr-5 text-[14px] bg-[#63c5f1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]">
                Tailwind CSS
              </h1>
            </div>
          </div>
        </div>
      </div>
{/*check it out on the browser. thats right..done... looks so clean
  lets proceed to the next lecture where we will implement the next and previous button
*/}

      {/*in this lecture, we are gonna implement the next and prev button
      scroll to the top and lets defined the function 
      */}
      <div class="relative flex bg-accent-color h-48 text-white">
        <div
          class={`group w-1/2 flex items-center justify-center  bg-cover ${hind.className}`}
          style={{
            backgroundImage: `url(${DataArray[pre]?.images[0]})`,
          }}
        >
          <a
            class="flex justify-center group-hover:bg-[#223740] cursor-pointer transition-color duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full"
            // href="/portfolio/kaizen-management-consultants"
            onClick={() => router.push(`/PortfolioDetail/${pre}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            Previous Project
          </a>
        </div>




        <div
          class={`group w-1/2 flex items-center justify-center  bg-cover ${hind.className}`}
          style={{
            backgroundImage: `url(${DataArray[next]?.images[0]})`,
          }}
        >
          <a
            class="flex justify-center group-hover:bg-[#223740] cursor-pointer transition-color duration-300 bg-[#405B66] bg-opacity-90 items-center w-full h-full"
            // href="/portfolio/vancouver-property-management"
            onClick={() => router.push(`/PortfolioDetail/${next}`)}
          >
            Next Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default index;
