import React from "react";
import Navbar from "../components/Navbar";
import User_data from "../components/Users_data";
import Posts_data from "../components/Posts_data";
import Comments_data from "../components/Comments_data";
import BarChart from "../components/Barchart";
import Piechart from "../components/Piechart";
import Footer from "../components/Footer";

function Users() {
  return (
    <>
      <Navbar />
      <div className="Flex flex-col my-20"></div>

      <div className="flex p-2.5 justify-between">
        <BarChart />
        <Piechart />
      </div>
      <User_data />
      <div className="Flex flex-col my-20"></div>
      <Posts_data />
      <div className="Flex flex-col my-20"></div>
      <Comments_data />
      <div className="Flex flex-col my-20"></div>
      <Footer />
    </>
  );
}

export default Users;
