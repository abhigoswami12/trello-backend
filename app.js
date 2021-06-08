var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

require("dotenv").config();
app.use(cors());

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    console.log("connected", err ? err : true);
  }
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var teamsRouter = require("./routes/teams");
var boardsRouter = require("./routes/boards");
var cardsRouter = require("./routes/cards");
var labelsRouter = require("./routes/labels");
var listsRouter = require("./routes/lists");
var commentsRouter = require("./routes/comments");
var userRouter = require("./routes/user");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/teams", teamsRouter);
app.use("/api/v1/boards", boardsRouter);
app.use("/api/v1/cards", cardsRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/lists", listsRouter);
app.use("/api/v1/labels", labelsRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
