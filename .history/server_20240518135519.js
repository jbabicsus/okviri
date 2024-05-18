const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());

const instruktorRoute = require("./routes/instruktorRoute");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute"); // Dodajte rutu za korisnike

app.use('/api/instruktor', instruktorRoute);
app.use('/api/admin', adminRoute);
app.use('/api/user', userRoute); // Registrujte rutu za korisnike

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));
