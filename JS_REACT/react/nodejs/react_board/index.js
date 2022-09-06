const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser"); //요청정보 처리를 위함
const cors = require("cors"); // 교차허용

// const iconv = require("iconv-lite") // 한글 디코딩 npm install iconv-lite
// iconv.decode('파일명',"utf-8").toString()
// path.extname("파일") : 확장자 추출

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

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "SELECT COUNT(*) AS CNT FROM MEMBER WHERE ID=? AND PW=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    // if (result[0].cnt === 1) {
    //   res.send("success");
    // } else {
    //   res.send("fail");
    // }
    res.send(result);
  });
});

app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;

  const sqlQuery = "INSERT INTO MEMBER VALUES (?,?,?);";
  db.query(sqlQuery, [id, pw, email], (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// 게시판 전체 불러오기
app.post("/list", (req, res) => {
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);

  console.log(
    "list!!!(page_num, page_size, article_count)",
    page_num,
    ",",
    page_size
  );
  const start_limit = (page_num - 1) * page_size;
  console.log("list!!!(start_limit, page_size)", start_limit, ",", page_size);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL ORDER BY BOARD_NUM DESC LIMIT ?,?;";
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
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
    res.send("success");
  });
});

app.get("/count", (req, res) => {
  console.log("count!!!");
  const sqlQuery = "SELECT COUNT(*) AS COUNT FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = req.body.num;

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "UPDATE BOARD_TBL SET BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=NOW() WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
