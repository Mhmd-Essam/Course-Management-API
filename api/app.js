 const express = require('express') ; 
 const morgan  = require('morgan') ; 
 const dotenv = require("dotenv");
 const app = express() ; 


 const coursesRoutes = require('../src/routes/courseRoutes') ; 
 const {errorHandler,notfound} = require('../src/middlewares/errorHndler')
 const connectiondb= require('../src/config/db');
 dotenv.config();

 app.use(express.json()) ;
 connectiondb()

  if(process.env.NODE_MODE ==='development'){ 
    app.use(morgan("dev")); 
    console.log(`mode:${process.env.NODE_MODE}`)
  }
app.use('/api/courses',coursesRoutes); 
app.use(notfound);
app.use(errorHandler); 

 app.listen(process.env.PORT,()=>{ 
    console.log(`The App Is Listen in port ${process.env.PORT} ..`)
 })
