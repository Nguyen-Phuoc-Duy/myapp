const express = require("express");
const app = express();

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(3000)

//////

// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   next();
// };

// app.use(requestTime);

// app.get("/", (req, res) => {
//   let responseText = "Hello World!<br>";
//   responseText += `<small>Requested at: ${req.requestTime}</small>`;
//   res.send(responseText);
// });

// app.listen(3000);

////
//const express = require('express')
//const app = express()

const cookieParser = require("cookie-parser");
const cookieValidator = require("./cookieValidator");

async function validateCookies(req, res, next) {
  await cookieValidator(req.cookies);
  next();
}

app.use(cookieParser());

app.use(validateCookies);

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
