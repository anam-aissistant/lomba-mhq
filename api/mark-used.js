// API Route: /api/mark-used
// Menandai 1 paket sebagai digunakan (append ke list)

import { get, put } from '@vercel/blob';

const BLOB_KEY = 'mhq-used-paket.json';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { paketId } = req.body;
    
    if (!paketId || typeof paketId !== 'number') {
      return res.status(400).json({ error: 'Invalid paketId' });
    }

    // Ambil data existing
    let used = [];
    try {
      const blob = await get(BLOB_KEY);
      if (blob) {
        const text = await blob.text();
        const data = JSON.parse(text);
        used = data.used || [];
      }
    } catch (e) {
      // File belum ada
    }

    // Tambah paketId jika belum ada
    if (!used.includes(paketId)) {
      used.push(paketId);
    }

    // Simpan ke Blob
    await put(BLOB_KEY, JSON.stringify({ used, updatedAt: new Date().toISOString() }), {
      contentType: 'application/json',
      access: 'public',
    });

    return res.status(200).json({ success: true, used });
  } catch (error) {
    console.error('Mark Used API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}