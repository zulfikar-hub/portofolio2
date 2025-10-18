import db from '../config/db.js';

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        p.id_produk,
        p.nama_produk,
        p.deskripsi,
        p.harga,
        p.status,
        p.gambar,
        k.nama_kategori
      FROM produk p
      JOIN kategori k ON p.id_kategori = k.id_kategori
    `);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(`SELECT * FROM produk WHERE id_produk = ?`, [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
