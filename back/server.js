const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app =express();
const port = 3003;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

var db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE_NAME,
    multipleStatements: true
  });
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  
app.get("api/get",(req, res) => {
    const sqlSelect = "SELECT * FROM universities";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
    })
})

// app.post("/post",(req, res) => {
//     const universityName = req.body.name;
//     const country = req.body.country;
//     const stateProvince = req.body.stateprovince;
//     const alphaCode = req.body.alphacode;
//     const domain = req.body.domains;
//     const webPage = req.body.webpage;


//     const sqlInsert = "INSERT INTO universities (universityname, stateprovince, country, alphacode, domains, webpage) VALUES (?, ?)";
//     db.query(sqlInsert, [, stateProvince, country, alphaCode, domain, webPage ], (err, result) => {
//         console.log(result);
//     });

// });



app.listen(port, () => {
    console.log(`SERVER ON https://localhost:${port}`);
})