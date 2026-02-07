// API Route: /api/state
// Mengambil daftar paket yang sudah digunakan dari Vercel Blob

import { get, put } from '@vercel/blob';

const BLOB_KEY = 'mhq-used-paket.json';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Ambil data dari Blob
      try {
        const blob = await get(BLOB_KEY);
        if (blob) {
          const text = await blob.text();
          const data = JSON.parse(text);
          return res.status(200).json({ used: data.used || [] });
        }
      } catch (e) {
        // File belum ada, return empty
      }
      return res.status(200).json({ used: [] });
    }

    if (req.method === 'POST') {
      const { used } = req.body;
      
      if (!Array.isArray(used)) {
        return res.status(400).json({ error: 'Invalid data format' });
      }

      // Simpan ke Blob
      await put(BLOB_KEY, JSON.stringify({ used, updatedAt: new Date().toISOString() }), {
        contentType: 'application/json',
        access: 'public', // Public read untuk simplicity
      });

      return res.status(200).json({ success: true, used });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('State API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}