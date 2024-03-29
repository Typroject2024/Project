import React from 'react'
const express =  require("express")
const app = express()
const mysql = require("mysql");

const db = mysql.createConnection({
    user: "host",
    host:"localhost",
    password:"",
    database: "nodejsdb",
});

app.get('/', (req,res) => {
    res.send("Hello world!!");
})

app.listen(5001, () => {
    console.log("Yes!!!");
})

// function Index() {
//     return (

//         <>
        


//         </>
//     )
// }

// export default Index