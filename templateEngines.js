var express = require("express");
var app = express();

app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

////////////////////////////////

// const fs = require("fs"); // this engine requires the fs module
// app.engine("ntl", (filePath, options, callback) => {
//   // define the template engine
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err);
//     // this is an extremely simple template engine
//     const rendered = content
//       .toString()
//       .replace("#title#", `<title>${options.title}</title>`)
//       .replace("#message#", `<h1>${options.message}</h1>`);
//     return callback(null, rendered);
//   });
// });
// app.set("views", "./views"); // specify the views directory
// app.set("view engine", "ntl"); // register the template engine
////////////////////////////////////
const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
