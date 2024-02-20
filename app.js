const express = require('express');
const http = require("https");
const app = express();
const fs = require('fs');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));

const auth = require('./routes/auth');
const home = require('./routes/home');
const path = require('path');

app.use(express.static('public'))

app.use('/create', auth);

app.use('/', home);

app.get('/cart', (req, res) => {
    console.log(process.env.CHECKOUT_KEY);
    res.sendFile(path.join(__dirname, 'public/cart.html'));
})

app.get('/create-payment', (req, res) => {

	const options = {
		"method": "POST",
		"hostname": "test.api.dibspayment.eu",
		"port": 443,
		"path": "/v1/payments",
		"headers": {
			"content-type": "application/json",
			"Authorization": process.env.AUTHORIZATION
		}
	};

	const restreq = http.request(options, function (resp) {
		const chunks = [];

		console.log("statusCode: ", resp.statusCode);
		console.log("headers: ", resp.headers);

		resp.on("data", function (chunk) {
			console.log("on data");
			chunks.push(chunk);
		});
		resp.on("end", function () {
			const body = Buffer.concat(chunks);
			console.log(body.toString());
			res.send(body.toString());
		});
	});

  // Read hard-coded payload from file in this example.
	// This is where you would normally generate a 
	// json object dynamically based on the current order.
	let payload = fs.readFileSync(`${__dirname}/public/payload.json`);
	restreq.write(payload);
	// console.log(JSON.parse(payload));

	restreq.on('error', function (e) {
		console.error('error');
		console.error(e);

	});
	restreq.end();
})

app.listen(2000, () => {
    console.log("Server is now listening on port 2000");
});

//evita che node si chiuda su un errore
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});