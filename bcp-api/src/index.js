"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 8000;
app.get("/", function (req, res) {
    res.send("Hello Typescript with Node.js!");
});
app.listen(PORT, function () {
    console.log("Server Running here \uD83D\uDC49 https://localhost:".concat(PORT));
});
function factor(n) {
    i: number = 1;
    f: number = 0;
    for (i = n; i > 0; i--) {
        f = f + i;
    }
    return f;
}
console.log(factor(100));
