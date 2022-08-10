const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser"); //요청정보 처리를 위함
const cors = require("cors"); // 교차허용

const app = express(); //서버생성
const PORT = process.env.port || 8008; //포트설정

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", //출저 허용 옵션
  credential: true, //사용자 인증이 필요한 리소스(쿠키...등) 접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bbs",
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

// 게시판 전체 불러오기
app.get("/list", (req, res) => {
  console.log("list");
  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT,DATE_FORMAT(BOARD_DATE, '%Y-%m-%d')AS BOARD_DATE FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//글쓰기
app.post("/insert", (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) VALUES (?,?,?);";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    res.send(result);
  });
});
