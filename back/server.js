const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app =express();
const port = 3003;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rmadrid@7',
    database: 'FMW'
});
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  


app.post("/post",(req, res) => {
    const universityName = req.body.name;
    const country = req.body.country;
    const stateProvince = req.body.stateprovince;
    const alphaCode = req.body.alphacode;
    const domain = req.body.domains;
    const webPage = req.body.webpage;


    const sqlInsert = "INSERT INTO universities (universityname, stateprovince, country, alphacode, domains, webpage) VALUES (?, ?)";
    db.query(sqlInsert, [, stateProvince, country, alphaCode, domain, webPage ], (err, result) => {
        console.log(result);
    })

});



app.listen(port, () => {
    console.log(`SERVER ON https://localhost:${port}`);
})