const express = require('express');
require('dotenv').config();
const bp = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.use(bp.json());
app.use(bp.urlencoded({extended: false }));

const MONGO_URI = process.env.MONGO_URI;

mongoose
	.connect(MONGO_URI, { useNewUrlParser: true })
	.then(() => console.log('mongo connected'))
	.catch(err => console.log(err));

app.get('/', (req, res) => {
	res.send('heyo');
});

app.listen(PORT, ()=> {
	console.log('server running on ${PORT}');
});

app.post('/user', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});
