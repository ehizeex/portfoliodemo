"use client";
import React from "react";
import BusyBeeGold from "../../components/busy-bee-gold/index";
import { DataArray } from "../../data";
import CallToAction from "@/app/components/CallToAction/CallToAction";

const Portfolio = (props) => {
  console.log("params saleem", props.params.id);
  return (
    <React.Fragment>
      <BusyBeeGold
        data={DataArray[props.params.id]}
        id={props.params.id}
        DataArray={DataArray}
      />
      <CallToAction/>
    </React.Fragment>
  );
};

export default Portfolio;
