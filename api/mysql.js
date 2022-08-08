const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3306;

app.use(cors());
app.use(express.json());

// create the connection to database
const connection = mysql.createConnection({
  host: "bamba.cs.colman.ac.il",
  user: "cs115",
  password: "Move@115",
  database: "MusiMatch",
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mySQL connected...");
});

let db_users = null;
let db_updateUsers = null;
let db_delUsers = null;
let db_posts = null;
let db_tags = null;
let db_comments = null;
let db_tagsDesc = null;
let db_ppu = null;

//show me in the bar chart how many posts used specific tag
app.get("/getTags", (req, res) => {
  connection.query(
    "SELECT * FROM `TAGS_TAG_ID_TO_POST`", //   "SELECT * FROM `TAGS_TAG_ID_TO_POST` ORDER BY `tag_id` DESC
    function (err, results, fields) {
      db_tagsDesc = results;
      console.log("posts id to tags id: ", db_tagsDesc); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.send(db_tagsDesc);
    }
  );
});

app.get("/postsPerUser", (req, res) => {
  connection.query(
    "SELECT u.id, u.user_name ,COUNT(p.creator_id) AS 'num_of_posts' FROM `USERS` AS u LEFT JOIN `POSTS` AS p ON p.creator_id = u.id GROUP BY u.id ORDER BY `num_of_posts` DESC",
    function (err, results, fields) {
      db_ppu = results;
      console.log("posts id to tags id: ", db_ppu); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.send(db_ppu);
    }
  );
});

// get all posts
app.get("/getAllPosts", (req, res) => {
  connection.query("SELECT * FROM `POSTS`", function (err, results, fields) {
    db_posts = results;
    console.log("all the posts: ", db_posts); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    res.send(db_posts);
  });
});

// get all users
app.get("/getAllUsers", (req, res) => {
  connection.query("SELECT * FROM `USERS`", function (err, results, fields) {
    db_users = results;
    console.log("all the userss: ", db_users); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    res.send(db_users);
  });
});

// get all comments
app.get("/getAllComments", (req, res) => {
  connection.query("SELECT * FROM `COMMENTS`", function (err, results, fields) {
    db_comments = results;
    console.log("all the posts: ", db_comments); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    res.send(db_comments);
  });
});

// UPDATE user
app.get("/updateUser", (req, res) => {
  connection.query(
    "UPDATE `USERS` SET user_name = user_name, first_name = first_name, average_rate = average_rate, sporify_url = spotyfy_url, user_type = user_type WHERE id = user.id",
    function (err, results, fields) {
      db_updateUsers = results;
      console.log("all the tags: ", db_updateUsers); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.send(db_updateUsers);
    }
  );
});

// DELETE user

// app.delete("/deleteUser/:id", (req, res) => {
//  console.log(req.params.id)
//  connection.query(
//    "DELETE FROM `USERS` WHERE id = user.id", [req.params.id],
//    function (err, results, fields) {
//      db_delUsers = results;
//      console.log("deleted user ", db_delUsers); // results contains rows returned by server
//      //console.log(fields); // fields contains extra meta data about results, if available
//      res.send(db_delUsers);
//    }
//  );
// });

//   connection.query(
//     // "SELECT 'tag_id', COUNT(tag_id) FROM 'TAGS_TAG_ID_TO_POSTS' GROUP BY 'tag_id' ORDER BY 'COUNT(tag_id)' DESC",
//     "SELECT * FROM `TAGS_TAG_ID_TO_POST`",
//     function (err, results, fields) {
//       db_tags = results;
//       console.log("all the tags: ", db_tags); // results contains rows returned by server
//       //console.log(fields); // fields contains extra meta data about results, if available
//       res.send(db_tags);
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
