import React from "react";
import Navbar from "../components/Navbar";
import BarChart from "../components/Barchart";
import Piechart from "../components/Piechart";
import PiechartTitle from "../components/PiechartTitle";

function Statistics() {
  return (
    <>
      <Navbar />
      <div className="flex p-2.5 justify-between">
        <PiechartTitle/>
        <BarChart />
        <Piechart />
      </div>
    </>
  );
}
export default Statistics;
