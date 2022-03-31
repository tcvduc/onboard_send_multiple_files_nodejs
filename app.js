const app = require("express")();

app.use("/", function (req, res) {
  const path = require("path");
  const fs = require("fs");
  const listFilesPath = path.join(__dirname, "./list-files");
  const ret = fs.readFileSync(listFilesPath, {});
  console.log(ret);
});

const port = 4;

app.listen(port, function () {
  console.log(`app is listening at port = ${port}\nURI: http://localhost:4`);
});
