const express = require('express');
const app = express();
var path = require('path');

const mysql = require('mysql');
const PORT = 4000;
const cors = require('cors');
const bodyParser = require("body-parser");


let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
    host: "localhost",
    user: "Dode1",
    password: "1234",
    database: "SQLDB"
});

app.listen(PORT, () => {
  //포트번호 3000으로 서버 구동
  console.log("서버 시작 주소: http:localhost:"+PORT);
});
app.get("/", (req, res) => {
  const sqlQuery = "  ";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});
app.get("/list", (req, res) => {
  const sqlQuery = "SELECT * FROM board;";
  db.query(sqlQuery, (err, result) => {
    console.log(result)
    res.send(result);
  });
});
app.post("/insert", (req, res) =>{
  const title = req.body.title; 
  const content = req.body.content; 
  const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result) => {
      res.send('success!'); 
  });
});
