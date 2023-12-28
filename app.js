var createError = require("http-errors");
var express = require("express");
//var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

////////////////
//const express = require("express");
//const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  res.send("Got a POST request");
});
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.static("public"));
app.use("/static", express.static("public"));
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));
app.get("/about", (req, res) => {
  res.send("about");
});
///////////
//Route path: /users/:userId/books/:bookId
//Request URL: http://localhost:3000/users/34/books/8989
//req.params: { "userId": "34", "bookId": "8989" }

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.get(
  "/example/b",
  (req, res, next) => {
    res.send("Hello from A!");
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);
//////
const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

app.get("/example/c", [cb0, cb1, cb2]);

///////////

app.get(
  "/example/d",
  [cb0, cb1],
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.send("Hello from D!");
  }
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
