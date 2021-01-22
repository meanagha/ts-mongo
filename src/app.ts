import express from 'express';
import * as bodyparser from 'body-parser';

const app = express();
app.use(bodyparser.json());
require('dotenv').config()


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {   
    console.log(`Server is running on port ${PORT}.`);
});