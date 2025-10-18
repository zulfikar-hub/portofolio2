import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

// Load konfigurasi .env
dotenv.config();

const app = express();

// Middleware agar bisa membaca JSON
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
