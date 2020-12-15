var express = require("express");
var app = express();
app.use("/audio", express.static("audio"));
app.use("/video", express.static("video"));
app.listen(5000);
