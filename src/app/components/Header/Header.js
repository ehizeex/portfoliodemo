"use client";
import React, { useEffect, useState } from "react";
import "../Header/DiagonalDrawer.css";
import Drawer from  './DiagonalDrawer'

const Header = () => {
    //declare the state variable for the drawer to be used
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

//state variable for the header scroll
  const [isScrolled, setIsScrolled] = useState(false);

  /*
if the initial position of payeYoffset is == 0 
the initial state will be false esle we will update the state to true.

to demonstrate this example, we just have to duplicate the home render,
so that we can have a scroll
we will be able  to scroll up and down beautiful  
so at this point, the  application on Y axis is equal 0 and therefore, it is gonna maintina  the 
initial state which is false
but when i  scroll up, it becopmes the application on page Y axis will be greater than zero  and hence we will 
UPdate the initial state to true. 

the question is, why exactly  are  we doing this  ? 
it is simply bcos we want to condiontally stylise  the  header

// decalere  he state  variabel isScrolled 
// lets do it within the effect hook. for that reason, we have t oswitch from server side rendering to  
client  side 

  */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
//now we have to clean up pur function by removing the scroll 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
console.log(isScrolled)
  //useEffect ends  here 
  /*after the console log, check it on the browser and demomstrate the scrolling up nd dpwn 

  now  we are able to get the condtion, lets apply it to the header
   */


  // function to open the drawer
  const openDrawer = () => {
    setIsOpen(true);
  };


  return (
    <React.Fragment>

 <div >
        <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
          <Drawer
            isOpen={isOpen} //  by default, set is Open to false
            setIsOpen={setIsOpen}
            selectedIndex1={selectedIndex1}
            setSelectedIndex1={setSelectedIndex1}
          />
        </div>
      </div> 


{/*the idea is simple. when you scoll down the website,  we want  the  
header to  be fixed to the top. we  will  give i t a background color and  also specify the 
box shadow
*/}
<header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0   z-50 w-full transition-all duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : "",
        }}
      >
        {/*
        check it put scroll up,,,,the background color becomes white and the 
        box shadow becomes light blue


        this is all for  now, in the next lecture, we will  implement the nav links 


        */}

{/*this is the drawer container located at  the topLeft corner of the  header compoent */}
        <div className="relative">
          <div
             onClick={openDrawer}
             className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] flex justify-center items-center rounded-br-xl"
           >
            {/*adding the white drawl menu image*/}
            <div className="relative  w-7 lg:w-10 h-7 lg:h-10  flex justify-center items-center">
              <img src="/drawer.png" alt="drawer image" className="w-[150px] h-10" /> 
            </div>
          </div>
        </div>

        {/* check it out  */}


{/*designing the main heeader component for the top nav   links,, 
  first,  lets declare the  necesary state  variables 
*/}
        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 0 ? (
                // we will get it ticked to indecate we are on homepage
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                //on hover effect to show sweet animation
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              {/* if the menu is not clicked, we want the font color to be a little bit faint
              but when it is clicked we awant to be thicker, so that it can clearly
               indicate that  the menu is clickk  */}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
              >
                Home
              </a>
            </li>

{/*duplicate the li tag 3 times and  change the index value, the href and inner html*/}

            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 1 ? (
                <span className="menu-effect transform opacity-100   -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 1 ? "text-black" : ""
                } text-[#47626D] group-hover:text-black`}
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
              >
               Portfolio
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 2 ? (
                <span className="menu-effect transform opacity-100   -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 2 ? "text-black" : ""
                } text-[#47626D] group-hover:text-black`}
                href="/#about-me-component"
                onClick={() => setSelectedIndex1(2)}
              >
                About Me
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect transform opacity-100   -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 3 ? "text-black" : ""
                } text-[#47626D] group-hover:text-black`}
                href="/#hire-me"
                onClick={() => setSelectedIndex1(3)}
              >
                Hire Me
              </a>
            </li>
            {/* <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 4 ? (
                <span className="menu-effect transform opacity-100   -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 4 ? "text-black" : ""
                } text-[#47626D] group-hover:text-black`}
                href="/#testimonial"
                onClick={() => setSelectedIndex1(3)}
              >
                Testimonial
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
