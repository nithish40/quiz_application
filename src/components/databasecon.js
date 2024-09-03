// const mysql = require("mysql2");
// const express = require('express');
// const port = 3000;
// const app = express();

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "nithish"
// });

// connection.connect();

// app.get("/data", (req, res) => {
//   connection.query(`SELECT * FROM student ORDER BY id`, (err, result) => {
//     if (err) {
//       throw err;
//     }

//     let html = `<html><body><table border="1"><tr>`;

//     // Add table headers
//     Object.keys(result[0]).forEach(key => {
//       html += `<th>${key}</th>`;
//     });

//     html += `</tr>`;

//     // Add table rows
//     result.forEach(row => {
//       html += `<tr>`;
//       Object.values(row).forEach(value => {
//         html += `<td>${value}</td>`;
//       });
//       html += `</tr>`;
//     });

//     html += `</table></body></html>`;

//     res.send(html);
//   });
// });

// app.listen(port, () => {
//   console.log("Server running on port", port);
// });





/**using react */

// server.js
const mysql = require("mysql2");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nithish"
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get("/data", (req, res) => {
  connection.query(`SELECT * FROM student ORDER BY id`, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching data', error: err });
    }
    res.json(result);
  });
});

app.post("/login", (req, res) => {
  const { user_name, password } = req.body;
  
  if (!user_name || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  connection.query(
    'SELECT * FROM student WHERE user_name = ? AND password = ?',
    [user_name, password],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error during query', error: err });
      }

      if (results.length > 0) {
        res.json({success:true,username:user_name}); // Valid user
      } else {
        res.status(401).json({ message: 'Invalid username or password' }); // Unauthorized
      }
    }
  );
});

app.post("/Signup",(req,res)=>{
  const {user_name,password,email}=req.body;
  if(!user_name||!password||!email){
    return res.status(404).json({success:false,message:"All fields are required"});
  }
  connection.query(
    `INSERT INTO student (user_name, email, password) VALUES (?, ?, ?)`,
    [user_name, email, password],
    (err, result) => {
      if (err) {
        console.error('Error during registration:', err); // Log error details for debugging
        return res.status(500).json({ success: false, message: "Error during registration" });
      }
      return res.json({ success: true, message: "Registration successful" });
    }
  );
});


app.listen(port, () => {
  console.log("Server running on port", port);
});
