import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { User } from "./model/User.js";
// import bodyParser from "body-parser";
const app = express()

// connecting to databse
const mongoURL = 'mongodb://localhost:27017/mydatabase'; 
mongoose.connect(mongoURL)
.then(()=>{console.log("connected successfully")})
.catch((err)=>{console.error("there is problem while connecting ",err)})

const port = 3000

// app.use(bodyParser.json());

// we directly parse the JSON without bodyparser by expres
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.post('/', async (req, res)  => {
    
    const newuser = new User(req.body) ;
    const saveduser = await newuser.save();
    console.log(req.body);
    console.log(newuser);
    console.log(saveduser);
    // console.log('Received data:', receivedData);

    res.json({ message: 'Data received successfully!', data: saveduser });


})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
