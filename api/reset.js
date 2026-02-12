// API Route: /api/reset
// Reset semua state (hapus semua paket yang sudah digunakan)

import { Redis } from '@upstash/redis';

const REDIS_KEY = 'mhq-used-paket';
let memoryStore = { used: [] };

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

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
    // Reset memory
    memoryStore.used = [];
    
    const hasRedis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
    
    if (hasRedis) {
      try {
        // Delete dari Redis
        await redis.del(REDIS_KEY);
      } catch (redisError) {
        console.error('Redis del error:', redisError.message);
      }
    }

    return res.status(200).json({ success: true, used: [] });
  } catch (error) {
    console.error('Reset API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
