const app = require("express")();

// app.use("/", function (req, res, next) {
//   const path = require("path");
//   const fs = require("fs");
//   const listFilesPath = path.join(__dirname, "/list-files");
//   const allFilesName = fs.readdirSync(listFilesPath, {});

//   allFilesName.forEach(function (value) {
//     const fileName = value;
//     const filePath = path.join(listFilesPath, fileName);

//     // Can't set headers after they are sent.
//     // return res.sendFile(filePath, function (err) {
//     //   console.log("err: ", err);
//     // });
//   });

//   res.json({
//     message: "/",
//   });
// });

app.use("/getAllURI", function (req, res) {
  const uri = [
    "https://www.w3.com/api/1",
    "https://www.w3.com/api/2",
    "https://www.w3.com/api/3",
  ];

  return res.json({
    ret: uri,
  });
});

app.use(function (req, res, next) {
  const error = new Error("dasdadasd");
  return res.status(500).send({
    errorMessage: error,
  });
});

const port = 4;

app.listen(port, function () {
  console.log(`app is listening at port = ${port}\nURI: http://localhost:4`);
});
