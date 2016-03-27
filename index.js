var express = require('express');

var PORT = (process.env.PORT || 5000);

var app = express();

app.use(function (req, res) {
	// TODO: code here
});

app.listen(PORT, function () {
	console.log('Node app is running on port', PORT);
});
