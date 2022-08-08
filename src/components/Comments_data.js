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

function Comments_data() {
  const [Comments, setComments] = useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    const getAllComments = async () => {
      const { data } = await axios.get("http://localhost:3306/getAllComments");
      setComments(data);
      console.log(data);
    };
    getAllComments();
  }, []);

  const data =
    Comments &&
    Comments.map((comment) => {
      return {
        id: comment.id,
        user_id: comment.user_id,
        post_id: comment.post_id,
        content: comment.content,
        upload_time: comment.upload_time,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
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
      <div className="flex flex-col p-2.5 w-full">
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Comments Table
        </Typography>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            title={"lala"}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">id</TableCell>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">Post ID</TableCell>
                <TableCell align="center">Content</TableCell>
                <TableCell align="center">Upload Time</TableCell>
                <TableCell align="center">Created At</TableCell>
                <TableCell align="center">Upload At</TableCell>
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
                      <TableCell align="center">{data.id}</TableCell>
                      <TableCell align="center">{data.user_id}</TableCell>
                      <TableCell align="center">{data.post_id}</TableCell>
                      <TableCell align="center">{data.content}</TableCell>
                      <TableCell align="center">{data.upload_time}</TableCell>
                      <TableCell align="center">{data.createdAt}</TableCell>
                      <TableCell align="center">{data.updatedAt}</TableCell>
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
      </div>
    </>
  );
}
export default Comments_data;
