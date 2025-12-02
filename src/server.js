import projectRoutes from './routes/projectRoutes.js';
import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRouters.js';
import { swaggerDocs } from "./swagger.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
swaggerDocs(app);
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});


