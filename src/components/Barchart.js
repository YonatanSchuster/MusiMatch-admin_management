import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";



function Statistics_BarChart_Data() {
  const [Tags, setTags] = useState(null);

  useEffect(() => {
    const getAllTags = async () => {
      const { data } = await axios.get("http://localhost:3306/getTags");
      setTags(data);
      console.log(data);
    };
    getAllTags();
  }, []);
  
  const tagToPosts = [
    { name: "Happy", numberOfPosts: 0 },
    { name: "Sad", numberOfPosts: 0 },
    { name: "Exciting", numberOfPosts: 0 },
    { name: "Emotional", numberOfPosts: 0 },
    { name: "Inspiring", numberOfPosts: 0 },
    { name: "Crying", numberOfPosts: 0 },
  ];
  Tags &&
    Tags.forEach((tag) => {
      tagToPosts[tag.tag_id - 1].numberOfPosts++;
    });

  return (
    <>

      <h1 className="text-2xl">Posts Per Tags</h1>

      <BarChart
        width={650}
        height={400}
        data={tagToPosts}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="numberOfPosts"
          fill="#63768D"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </>
  );
}
export default Statistics_BarChart_Data;
