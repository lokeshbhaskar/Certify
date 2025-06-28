import { configDotenv } from "dotenv";
import express from 'express';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import connectDB from "./config/db.js";
import { fileURLToPath } from 'url'
import path from 'path'

configDotenv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors(
    {
        origin: process.env.CLIENT_URL || "*" ,
        methods: [ "GET","POST","PUT","DELETE","PATCH" ],
        allowedHeaders:[ 'content-Type', 'Authorization' ]
    }
));

app.use(express.json())

connectDB();

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/tasks',taskRoutes)

//serve uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));