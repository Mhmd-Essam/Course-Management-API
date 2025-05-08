const mongoose = require('mongoose') ; 
require("dotenv").config({path:"./src/config/db.js"});

 async function connectiondb() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('DATABASEA Connected successfuly')
    }).catch((errorr)=>{ 
        console.log(errorr.errorResponse)
    })
 }


 module.exports = connectiondb ; 
