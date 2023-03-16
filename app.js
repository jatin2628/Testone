const express = require('express');
require('dotenv').config();
const app = express();


const userRouter = require('./routes/user');
const availRouter = require('./routes/availibility');
const availslotRouter = require('./routes/availslots');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(userRouter);
app.use(availRouter);
app.use(availslotRouter);

app.listen(3000,()=>{
    console.log("App is listeing on 3000");
})