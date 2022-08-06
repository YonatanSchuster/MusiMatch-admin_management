import React, { useState, useEffect } from "react";
import axios from "axios";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";

// here will be a component of a chart of all the posts i have in the db

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Posts_data() {
  const [Posts, setPosts] = useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("http://localhost:3306/getAllPosts");
      setPosts(data);
      console.log(data);
    };
    getAllPosts();
  }, []);

  const data =
    Posts &&
    Posts.map((post) => {
      return {
        id: post.id,
        title: post.title,
        poem_lyrics: post.poem_lyrics,
        melody_file_path: post.melody_file_path,
        creator_id: post.creator_id,
        post_type: post.post_type,
        average_rater_id: post.average_rater_id,
        average_post_rate: post.average_post_rate,
      };
    });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h5"
        id="tableTitle"
        component="div"
      >
        Posts Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" title={"lala"}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Poem Lyrics</TableCell>
              <TableCell align="center">Melody File Path</TableCell>
              <TableCell align="center">Creator ID</TableCell>
              <TableCell align="center">Post Type</TableCell>
              <TableCell align="center">Average Rater ID</TableCell>
              <TableCell align="center">Average Post Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => (
                  <TableRow
                    key={index}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.id}
                    </TableCell>
                    <TableCell align="center">{data.title}</TableCell>
                    <TableCell align="center">{data.poem_lyrics}</TableCell>
                    <TableCell align="center">
                      {data.melody_file_path}
                    </TableCell>
                    <TableCell align="center">{data.creator_id}</TableCell>
                    <TableCell align="center">{data.post_type}</TableCell>
                    <TableCell align="center">
                      {data.average_rater_id}
                    </TableCell>
                    <TableCell align="center">
                      {data.average_post_rate}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data?.length || 5}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
export default Posts_data;
