import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';

// app config 
const PORT = process.env.PORT  || 4000;
const app = express();
await connectDB()


// middle wares 
app.use(express.json());
app.use(cors());


// API ka route 
app.get('/',(req,res)=>{res.send('API working')});
app.use('/api/user',userRouter);
app.listen(PORT,()=>{
     console.log(`App working on ${PORT}`)
})