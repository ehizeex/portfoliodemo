"use client";
import React from "react";
import Header from "../app/components/Header/Header";
import HomeComponent from "../app/components/Home/HomeComponent";
import MySlider from "./components/SliderCards/mySlider";
import AboutMe from "./components/AboutMe/AboutMe";
import CallToAction from "./components/CallToAction/CallToAction";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactMe from "./components/ContactMe/ContactMe";

import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <HomeComponent />

      <div
        className="mt-0 pt-5 -mb-40"
        id="portfolio"
        style={{
          backgroundImage:
          "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p
            className="text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px,-20px)" }}
          >
            Portfolio
          </p>
          <div className="" style={{ transform: "translate(0px,-250px)" }}>
            <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
            >
              Here are a few of my most recent work. As a web designer and
              full-stack web developer, I constantly prioritise 100% client
              satisfaction. I always enjoy working on my projects, so each one
              is a new adventure for me. While working on each new project, I
              attempt to learn new things. As a result, my paintings are always
              current and one-of-a-kind.
            </p>
          </div>
        </div>

        <div style={{ transform: "translate(0px,-170px)" }}>
          <MySlider />
        </div>
      </div>
      <CallToAction />
      <AboutMe />
      <div id="hire-me" className="pt-32 mt-[0px] bg-[#223740] ">
        <ContactMe />
      </div>
      <Testimonial />
    </main>
  );
}
