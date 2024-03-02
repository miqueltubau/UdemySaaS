//connect our config.env
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4242;

// If app listens to the port successfully, It will print out the log.
app.listen(port, () => { console.log(`Server is running on port ${port}`)});