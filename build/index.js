"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = express_1.default();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map