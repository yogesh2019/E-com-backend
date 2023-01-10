const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv && dotenv.config();
const PORT = process.env.PORT || 4000;



app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("running on ",PORT);
});

