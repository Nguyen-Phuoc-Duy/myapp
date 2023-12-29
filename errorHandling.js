var express = require("express");
var app = express();
const PORT = 3000;
// app.get("/", (req, res) => {
//   throw new Error("BROKEN"); // Express will catch this on its own.
// });
/////////////////

// // Import the necessary modules and set up your server

// app.get("/user/:id", async (req, res, next) => {
//   try {
//     const user = await getUserById(req.params.id);
//     res.send(user);
//   } catch (error) {
//     next(error); // Passes the error to the error handling middleware
//   }
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

//////////////////
// app.get("/", (req, res, next) => {
//   setTimeout(() => {
//     try {
//       throw new Error("BROKEN");
//     } catch (err) {
//       next(err);
//     }
//   }, 100);
// });
/////////////////////////////////
// app.get("/", (req, res, next) => {
//   Promise.resolve()
//     .then(() => {
//       throw new Error("BROKEN1");
//     })
//     .catch(next); // Errors will be passed to Express.
// });
////////////////////////////////
app.get(
  "/a_route_behind_paywall",
  (req, res, next) => {
    if (!req.user.hasPaid) {
      // continue handling this request
      next("route");
    } else {
      next();
    }
  },
  (req, res, next) => {
    PaidContent.find((err, doc) => {
      if (err) return next(err);
      res.json(doc);
    });
  }
);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
