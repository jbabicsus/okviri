const express = require('express');
const app = express();
require('dotenv').config()
const dbConfig = require("./config/dbConfig");

const instruktorRoute = require("./routes/instruktorRoute");

app.use('api/instruktor' ,instruktorRoute);
const port =process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening to port ${port}`));