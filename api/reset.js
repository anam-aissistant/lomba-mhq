// API Route: /api/reset
// Reset semua state (hapus semua paket yang sudah digunakan)

import { put } from '@vercel/blob';

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
    // Reset ke array kosong
    await put(BLOB_KEY, JSON.stringify({ used: [], resetAt: new Date().toISOString() }), {
      contentType: 'application/json',
      access: 'public',
    });

    return res.status(200).json({ success: true, used: [] });
  } catch (error) {
    console.error('Reset API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}