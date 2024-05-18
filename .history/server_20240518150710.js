const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());

const instruktorRoute = require("./routes/instruktorRoute");
const adminRoute = require("./routes/adminRoute");
const instruktorsRoute = require("./routes/instruktorsRoute");

app.use('/api/user', instruktorRoute);
app.use('/api/admin', adminRoute);
app.use('/api/instruktor', instruktorsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));
