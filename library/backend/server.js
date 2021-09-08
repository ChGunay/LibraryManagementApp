import express from 'express';
import dotenv from 'dotenv'

import mongoose from "mongoose";
import userRouter from './routers/userRouter.js';
import bookRouter from './routers/bookRouter.js';
dotenv.config();
//In this file i created a basic server using npm express tp start implementing backend of the project
const app = express(); //app is the express server 
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//connect mongodb
mongoose.connect("mongodb://localhost/library",{
 
  useUnifiedTopology:true,
 
});
//creating a request to fetch the books data
/*app.get('/api/books', (req, res) => { //res is the answer to the request
  //json object of the response can be seen in the "http://localhost:5000/api/books" address as like in the data.js file
  
  res.send(data.books);
}); */

app.use("/api/users",userRouter);
app.use("/api/books",bookRouter);

//checking if server setup is complate
app.get('/', (req, res) => {
  
  res.send('Server is ready');
});
//error handling
//error catcher middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//use env variable as port rather than using only 500
//it checks if env port can be used, if not it uses port 5000
const port = process.env.PORT || 5000;
//listen is to define the port for the server
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});