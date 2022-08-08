import { PieChart, Pie, Legend, Tooltip } from "recharts";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Statistics_PieChart_Data() {
  const [Posts, setPosts] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("http://localhost:3306/postsPerUser");
      setPosts(data);
      console.log(data);
    };
    getAllPosts();
  }, []);

  const data =
    Posts &&
    Posts.map((post) => {
      return {
        name: post.user_name,
        value: post.num_of_posts,
      };
    });
  console.log(data);

  return (
    <>
          <h1 className="text-2xl">Posts Per User</h1>

      <PieChart width={650} height={450}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={200}
          cy={200}
          outerRadius={170}
          fill="#63768D"
          label
        />

        <Tooltip />
      </PieChart>
    </>
  );
}
export default Statistics_PieChart_Data;
