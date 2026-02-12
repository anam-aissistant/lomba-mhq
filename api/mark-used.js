// API Route: /api/mark-used
// Menandai 1 paket sebagai digunakan dengan Upstash Redis + LocalStorage fallback

import { Redis } from '@upstash/redis';

// In-memory fallback (tiap serverless instance terpisah)
let memoryStore = { used: [] };

// Initialize Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const REDIS_KEY = 'mhq-used-paket';

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

    const hasRedis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
    let used = [];
    let source = 'memory';
    
    if (hasRedis) {
      try {
        // Ambil dari Redis
        const redisData = await redis.get(REDIS_KEY);
        if (redisData) {
          used = Array.isArray(redisData) ? redisData : [];
          source = 'redis';
        }
      } catch (redisError) {
        console.log('Redis get error:', redisError.message);
        used = [...memoryStore.used];
      }
    } else {
      used = [...memoryStore.used];
    }

    // Tambah paketId jika belum ada
    if (!used.includes(paketId)) {
      used.push(paketId);
    }

    // Update memory store
    memoryStore.used = used;

    if (hasRedis) {
      try {
        // Simpan ke Redis (expire 30 hari)
        await redis.set(REDIS_KEY, used, { ex: 30 * 24 * 60 * 60 });
        source = 'redis';
      } catch (redisError) {
        console.error('Redis set error:', redisError.message);
      }
    }

    return res.status(200).json({ success: true, used, source });
  } catch (error) {
    console.error('Mark Used API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
