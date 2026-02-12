// API Route: /api/state
import { Redis } from '@upstash/redis';

const REDIS_KEY = 'mhq-used-paket';

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
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    console.log('State API - URL exists:', !!url);
    console.log('State API - Token exists:', !!token);

    if (!url || !token) {
      console.log('State API - No Redis config, returning empty');
      return res.status(200).json({ used: [], source: 'none' });
    }

    const redis = new Redis({ url, token });
    
    try {
      const data = await redis.get(REDIS_KEY);
      console.log('State API - Redis data:', data);
      
      const used = data || [];
      return res.status(200).json({ used, source: 'redis' });
    } catch (redisErr) {
      console.error('State API - Redis error:', redisErr.message);
      return res.status(200).json({ used: [], source: 'error', error: redisErr.message });
    }
  } catch (error) {
    console.error('State API - Fatal error:', error.message);
    return res.status(500).json({ error: 'Internal error', message: error.message });
  }
}
