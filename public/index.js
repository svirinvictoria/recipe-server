"use strict";

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.get("/test-route", function (req, res) {
    res.json({
        message: "Test route is working"
    });
});

app.server.listen(3000);
console.log("Started on port " + app.server.address().port);
//# sourceMappingURL=index.js.map