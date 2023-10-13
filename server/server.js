const express = require("express");
const app = express();
const PORT = process.env.port || 8000;

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

let corsOption = {
    origin : "*",
    credential : true,
}

app.use(cors(corsOption));

const mysql = require("mysql");
const db = mysql.createConnection({
    host : "localhost",
    user : "root", 
    password : "1111",
    database : "bbs",
})


db.connect();



app.get("/portfolio", (req, res)=>{
    const sqlQuery = "select * from portfolio_item";

    db.query(sqlQuery, (err, result)=>{
        // console.log("error : ", err);
        // console.log(result);
        res.send(result);
    });
})



app.get('/', (req, res) => {
    res.json({
        success: true,
        currentPage : "home"
    });
});

app.get('/list', (req, res) => {
    res.json({
        success: true,
        currentPage : "list"
    });
});


app.listen(PORT, () => {
    console.log(`server is listening at localhost:${PORT}`);
});