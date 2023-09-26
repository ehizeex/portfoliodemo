import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // lets defined the function toggleAccordina to update the state 
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#393939]  mb-4  py-6">
      <div
        className="flex justify-between items-center sm:p-4 p-2 w-full bg-red-500"
        onClick={toggleAccordion}
      >
        <h2 className="text-2xl text-white font-semibold">{title}</h2>
        <div className="bg-[#393939] h-8 w-8 flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            //by default, the arrow is facing downward. ..
            // so the logic is simple.if it is not opened, we want to rotate the arrow to the right else we waill keep the deafult behaviour 
            className={`w-6 h-6 text-white ${isOpen ? "" : "-rotate-90"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
{/*mapping through the items in footer component to have them displayed on the screen*/}
        {(ref) => (
          <div ref={ref} className="p-4 bg-yellow-500">
            {content.map((item) => (
              <p className="py-1 text-gray-400 font-sans">{item}</p>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Accordion;
