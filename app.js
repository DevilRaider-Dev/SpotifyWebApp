//import
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//routes
const authRoute = require('./routes/authRoute')

//get port from env
const port = process.env.PORT;

//generate app und bind public folder
const app = express();
app.use(express.static('public'))
    .use(cors())
    .use(cookieParser());

//view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

//port listener
app.listen(port, () => {
    //ToDo: write in log
    console.log(`listening at http://localhost:${port}`);
});

app.use('/', authRoute)