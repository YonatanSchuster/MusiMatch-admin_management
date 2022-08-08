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

function User_data() {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [Users, setUsers] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await axios.get("http://localhost:3306/getAllUsers");
      setUsers(data);
      console.log(data);
    };
    getAllUsers();
  }, []);

  const data =
    Users &&
    Users.map((user) => {
      return {
        id: user.id,
        user_name: user.user_name,
        is_admin: user.is_admin,
        user_type: user.user_type,
        first_name: user.first_name,
        last_name: user.last_name,
        average_rate: user.average_rate,
        spotify_url: user.spotify_url,
        creation_date: user.creation_date,
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
          Users Table
        </Typography>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            title={"lala"}
          >
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">Is Admin?</TableCell>
                <TableCell align="center">User Type</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Average Rate</TableCell>
                <TableCell align="center">Spotify URL</TableCell>
                <TableCell align="center">Creation Date</TableCell>
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
                      <TableCell align="center">{data.user_name}</TableCell>
                      <TableCell align="center">{data.is_admin}</TableCell>
                      <TableCell align="center">{data.user_type}</TableCell>
                      <TableCell align="center">{data.first_name}</TableCell>
                      <TableCell align="center">{data.last_name}</TableCell>
                      <TableCell align="center">{data.average_rate}</TableCell>
                      <TableCell align="center">{data.spotify_url}</TableCell>
                      <TableCell align="center">{data.creation_date}</TableCell>
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
export default User_data;
