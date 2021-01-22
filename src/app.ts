import express from 'express';
import bodyparser from 'body-parser';
import { requestLoggerMiddleware } from '../middleware/middleware';

const app = express();

app.use(bodyparser.json());
require('dotenv').config()
app.use(requestLoggerMiddleware);

const PORT = process.env.PORT || 9000;
app.get('/list',(req,res)=>{
    res.json([{id:1,description:'Buy Bead'}])

})
app.listen(PORT, async () => {   
    console.log(`Server is running on port ${PORT}.`);
});