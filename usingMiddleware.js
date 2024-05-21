const ejs = require("ejs");
var express = require("express");
var app = (module.exports = express());
var path = require("path");
const router = express.Router();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
////////////// 0
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });
//////////////////////// 1
// app.use("/user/:id", (req, res, next) => {
//   console.log("Request Type:", req.method);
//   next();
// });
////////////////////////////// 2
// app.get("/user/:id", (req, res, next) => {
//   res.send("USER");
// });
///////////////////////////////// 3
// app.use('/user/:id', (req, res, next) => {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, (req, res, next) => {
//   console.log('Request Type:', req.method)
//   next()
// })
///////////////////////////////////// 4
// app.get('/user/:id', (req, res, next) => {
//   console.log('ID:', req.params.id)
//   next()
// }, (req, res, next) => {
//   res.send('User Info')
// })
// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', (req, res, next) => {
//   res.send(req.params.id)
// })
////////////////////////////// 5
// app.get('/user/:id', (req, res, next) => {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, (req, res, next) => {
//   // send a regular response
//   res.send('regular')
// })
// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', (req, res, next) => {
//   res.send('special')
// })
/////////////////////////////// 6
// function logOriginalUrl (req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }
// function logMethod (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// }
// const logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff, (req, res, next) => {
//   res.send('User Info')
// })
///////////////////////////////////// 7

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// // a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("Request URL:", req.originalUrl);
//     next();
//   },
//   (req, res, next) => {
//     console.log("Request Type:", req.method);
//     next();
//   }
// );

// // a middleware sub-stack that handles GET requests to the /user/:id path
// router.get(
//   "/user/:id",
//   (req, res, next) => {
//     // if the user ID is 0, skip to the next router
//     if (req.params.id === "0") next("route");
//     // otherwise pass control to the next middleware function in this stack
//     else next();
//   },
//   (req, res, next) => {
//     // render a regular page
//     res.send("regular");
//   }
// );

// // handler for the /user/:id path, which renders a special page
// router.get("/user/:id", (req, res, next) => {
//   console.log(req.params.id);
//   res.render("login");
// });

// // mount the router on the app
// app.use("/", router);

////////////////////////////// 8
// // predicate the router with a check and bail out when needed
// router.use((req, res, next) => {
//   if (!req.headers["x-auth"]) return next("router");
//   next();
// });

// router.get("/user/:id", (req, res) => {
//   res.send("hello, user!");
// });

// // use the router and 401 anything falling through
// app.use("/admin", router, (req, res) => {
//   res.send("hello, admin!");
//   res.sendStatus(401);
// });
////////////////////////////////////////////// 9
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
