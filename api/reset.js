// API Route: /api/reset
import { Redis } from '@upstash/redis';

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
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    console.log('Reset API - URL exists:', !!url);
    console.log('Reset API - Token exists:', !!token);

    if (!url || !token) {
      console.log('Reset API - No Redis config');
      return res.status(200).json({ success: true, used: [], source: 'none' });
    }

    const redis = new Redis({ url, token });
    
    try {
      await redis.del(REDIS_KEY);
      console.log('Reset API - Redis deleted');
      return res.status(200).json({ success: true, used: [], source: 'redis' });
    } catch (redisErr) {
      console.error('Reset API - Redis error:', redisErr.message);
      return res.status(200).json({ success: true, used: [], source: 'error' });
    }
  } catch (error) {
    console.error('Reset API - Fatal error:', error.message);
    return res.status(500).json({ error: 'Internal error', message: error.message });
  }
}
