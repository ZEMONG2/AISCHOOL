// const express = require("express");
// // const morgan = require("morgan");
// // const cookieParser = require("cookie-parser");
// // const session = require("express-session");
// // const dotenv = require("dotenv");
// const path = require("path");
// //npm i express-mysql-session
// // const MySQLStore = require("express-mysql-session");

// // const options = {
// //   host: "localhost",
// //   port: 3306,
// //   user: "root",
// //   password: "123456",
// //   database: "bbs",
// // };

// // var sessionStore = new MySQLStore(options);

// // dotenv.config();
// const app = express();
// app.set("port", process.env.PORT || 3000);

// // app.use(morgan("dev"));
// // app.use("/", express.static(path.join(__dirname, "public")));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser(process.env.COOKIE_SECRET));
// // app.use(
// //   session({
// //     resave: false,
// //     saveUninitialized: false,
// //     secret: process.env.COOKIE_SECRET,
// //     store: sessionStore,
// //     cookie: {
// //       httpOnly: true,
// //       secure: false,
// //     },
// //     name: "session-cookie",
// //   })
// // );
// const multer = require("multer");
// const fs = require("fs");
// const { request } = require("express");

// try {
//   fs.readdirSync("uploads");
// } catch (error) {
//   console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
//   fs.mkdirSync("uploads");
// }

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// app.get("/upload", (req, res) => {
//   res.sendFile(path.join(__dirname, "multipart.html"));
// });
// // app.post("/upload", upload.single("image"), (req, res) => {
// //   console.log(req.file, req.body);
// //   req.send("ok");
// // });

// // app.post("/upload", upload.array("many"), (req, res) => {
// //   console.log(req.files, req.body);
// //   res.send("ok");
// // });
// app.post(
//   "/upload",
//   upload.fields([{ name: "image1" }, { name: "image2" }]),
//   (req, res) => {
//     console.log(req.files, req.body);
//     res.send("ok");
//   }
// );

// // app.use((req, res, next) => {
// //   console.log("모든 요청에 다 실행됩니다.");
// //   sess = req.session;
// //   sess.username = "zemong";
// //   console.log("req.session.username => ", req.session.username);
// //   console.log("req.sessionID => ", req.sessionID);
// //   console.log("req.session => ", req.session);
// //   next();
// // });

// // app.get(
// //   "/",
// //   (req, res, next) => {
// //     console.log("GET / 요청에서만 실행됩니다.");
// //     next();
// //   },
// //   (req, res) => {
// //     throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
// //   }
// // );

// // app.use((err, req, res, next) => {
// //   console.error(err);
// //   res.status(500).send(err.message);
// // });

// app.listen(app.get("port"), () => {
//   console.log(app.get("port"), "빈 포트에서 대기 중");
// });

//-----------------------------------------------------------

const express = require("express");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const router = require("./routes");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/user", userRouter);

router.get("/user/:id", function (req, res) {
  console.log(req.params, req.query);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "빈 포트에서 대기 중");
});
