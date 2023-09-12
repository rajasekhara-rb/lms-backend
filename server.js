const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/db');
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(cors());

connectToDB()

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})