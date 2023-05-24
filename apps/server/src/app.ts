import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.json());
// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  

export default app;
