// API Route: /api/state
// Mengambil daftar paket yang sudah digunakan dari Upstash Redis

import { Redis } from '@upstash/redis';

const REDIS_KEY = 'mhq-used-paket';
let memoryStore = { used: [] };

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const hasRedis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
    let used = [];
    let source = 'memory';
    
    if (hasRedis) {
      try {
        const redisData = await redis.get(REDIS_KEY);
        if (redisData) {
          used = Array.isArray(redisData) ? redisData : [];
          source = 'redis';
        }
        // Update memory store
        memoryStore.used = used;
      } catch (redisError) {
        console.log('Redis get error:', redisError.message);
        used = [...memoryStore.used];
      }
    } else {
      used = [...memoryStore.used];
    }

    return res.status(200).json({ used, source });
  } catch (error) {
    console.error('State API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
