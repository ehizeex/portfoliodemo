"use client";
import React, { useState } from "react";
import { AboutData } from "../../data";
import { Hind } from "next/font/google";
import '../index.css'

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const AboutMe = () => {
  //lets declare the necesary state variables
  const [isFlipped, setFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setmapData] = useState(AboutData[0]);

  //lets put  all of these  together in a function
  // within this function, we are just setting all these to false
  const myFunction = (data) => {
    setFlipped(false);
    setIsFaded(false);
    setmapData(data);
  };

  // lets have a handle click function to update the state
  const handleCardClick = (data, index) => {
    setFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunction(data), 600);
  };

  // implementing the next and previous function
  const HandleNext = () => {
    if (selectedIndex < 5) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };
  const HandlePre = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[5], 5);
    }
  };

  // havent dobe  this, lets implement it on the UI

  return (
    <React.Fragment>
      <div
        id="about-me-component"
        className="bg-[#E0F3FB] pt-[250px] mt-10 lg:pb-[600px] pb-[100px] relative lg:h-[800px]">
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-10 top-[-50px] text-[#EAF7FC]">
            About Me.
          </h1>

          <h1 className="relative  font-recoletaBlack text-5xl text-[#48AFDE] mb-5 -mt-40 md:px-24 px-5">
            About Myself.
          </h1>
          <h4 className="relative w-full  font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 md:px-24 px-5">
           Knack of building software with front and backend operations. 
          </h4>
          <section className="relative flex flex-col lg:flex-row md:px-24 px-5">
            <p
              className={`w-full font-[300] ${hind.className} lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 prose`}>
              My name is Ehizeex. A professional and enthusiastic full-stack
              developer and designer. However, I am more than just your average
              programmer or designer. I've been running my own business for the
              past 7 years and I was continually coming up with new concepts.
              I'm very fluid and never stop learning and adapting to new
              situations.
            </p>
            <p
              className={`w-full font-[300] ${hind.className} lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 prose`}>
              This attitude propelled me on an endless journey to learn a
              variety of skills, including Teaching skill, UI/UX, design,
              front-end and back-end development, devOps, SEO and optimisations,
              server management, product design, software design, database
              design, and many more...
            </p>
            <p
              className={`w-full font-[300] ${hind.className} lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 prose`}>
              When I encounter a new problem, I usually conduct extensive
              research on it in order to comprehend it and discover cutting-edge
              and innovative approaches for dealing with similar problems in the
              future. As a result, it's not unexpected that I've listed a lot of
              abilities here:
            </p>
          </section>
        </div>
      </div>

      {/*lets check it out on the browser
    this is all  for now, in the net lecture we will begin to design the categories
*/}





      {/*implementing the card skill button*/}
      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #EAF7FC  70%,#48AFDE 30%)",
          width: "100%",
        }}
        className="lg:-mt-60">
        <section className="flex container m-auto flex-col sm:flex-row md:px-24 px-5 transform sm:mt-0 mt-[50px]  translate-y-[-100px]">
          <div className="hidden sm:flex w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10">
              {AboutData.map((item, index) => (
                <a
                  // onclick of this a tag, we wanna send the selected card tiems to it   card container
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#48AFDE -5px 10px 20px 0px" }}
                  className={`cursor-pointer transition-all transform ${
                    //if the item is clicked, we want it to mark  as selected
                    selectedIndex === index
                      ? " -translate-y-2 bg-[#802d2d]"
                      : "hover:bg-blue-500 hover:shadow-xl hover:-translate-y-2 bg-white"
                  }   relative duration-300 group  rounded-xl center p-6 lg:p-10 flex flex-col justify-center items-center`}>
                  {/*we have to use the img tag to display the icon */}
                  <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                    <img src={item.img} alt="" className="w-16 h-16" />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 ${
                      selectedIndex === index ? "text-white" : ""
                    } group-hover:text-white text-[#47626D] mt-3`}>
                    {item?.title}
                  </h4>
                  {/*displaying the item count*/}
                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0  ${
                      selectedIndex === index
                        ? "opacity-100 rotate-12"
                        : "group-hover:rotate-12"
                    } group-hover:opacity-100  shadow-xl w-12 h-12 rounded-lg bg-green-500 flex justify-center items-center font-bold text-white font-recoletaBold text-xl`}>
                    *{item?.count}
                  </div>
                </a>
              ))}
            </div>
          </div>




          {/* displaying the selected card item */}

          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10                                                                                  ">
            <div className="bg-white rounded-xl p-10 xl:p-14 shadow-accent-color relative">
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? "fade-out" : ""
                }`}>
                <p
                  className={`text-[#47626D] ${hind.className}  text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100 undefined undefined`}>
                  My skills as:
                </p>
                <h2 className="font-recoletaBold text-[#47626D] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100 undefined undefined">
                  {mapData?.title}
                </h2>

                <ul
                  className={`${hind.className} font-[300] list-disc text-[#47626D] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined`}>
                  {mapData?.array?.map((skill) => (
                    <li className="mb-2">{skill}</li>
                  ))}
                </ul>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:-top-8 right-0 sm:-right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}>
                <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer text-7xl xl:text-9xl font-recoletaBlack text-white bg-[#47626D] p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48 transform transition duration-500 transform-preserve -rotate-6 transform-preserve">
                    <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
                    {mapData?.count}
                  </div>
                </div>
              </div>
              <div className="absolute right-10 -bottom-5 flex">
                <a
                  onClick={HandlePre}
                  className="w-12 h-12 rounded-xl transform mr-1 transition duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg -rotate-6 flex justify-center items-center bg-[#47626D]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="w-12 h-12 rounded-xl transform mr-1 transition duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg -rotate-6 flex justify-center items-center bg-[#EDF7FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-accent-color">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
