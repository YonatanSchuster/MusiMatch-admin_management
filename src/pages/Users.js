import React from "react";
import Navbar from "../components/Navbar";
import User_data from "../components/Users_data";
import Posts_data from "../components/Posts_data";
import Comments_data from "../components/Comments_data";
import Statistics_data from "../components/Statistics_data";

function Users() {
  return (
    <>
      <Navbar />
      <div className="Flex flex-col my-20"></div>
      <Statistics_data/>
      <div className="Flex flex-col my-20"></div>
      <User_data />
      <div className="Flex flex-col my-20"></div>
      <Posts_data />
      <div className="Flex flex-col my-20"></div>
      <Comments_data />
    </>
  );
}

export default Users;
