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

function Statistics_data() {
  const [Tags, setTags] = useState(null);

  useEffect(() => {
    const getAllTags = async () => {
      const { data } = await axios.get("http://localhost:3306/getTags");
      setTags(data);
      console.log(data);
    };
    getAllTags();
  }, []);

  const ttp =
    Tags &&
    Tags.map((tag) => {
      return {
        id: tag.id,
        post_id: tag.post_id,
        tag_id: tag.tag_id,
      };
    });

  const data = [
    {
      name: "Happy",

      numberOfPosts: 2,
    },
    {
      name: "sad",

      numberOfPosts: 1,
    },
    {
      name: "exciting",

      numberOfPosts: 1,
    },
    {
      name: "emotional",

      numberOfPosts: 1,
    },
    {
      name: "inspiring",

      numberOfPosts: 3,
    },
    {
      name: "crying",

      numberOfPosts: 2,
    },
  ];

  return (
    <>
      <h1>kkkk</h1>

      <BarChart
        width={650}
        height={400}
        data={data}
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
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </>
  );
}
export default Statistics_data;
