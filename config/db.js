import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load .env
dotenv.config();

// Buat koneksi pool ke MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Tes koneksi
(async () => {
  try {
    await db.getConnection();
    console.log('✅ Database connected successfully!');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
})();

export default db;
