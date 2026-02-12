// API Route: /api/mark-used
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
    let { paketId } = req.body;
    console.log('Mark Used API - Raw paketId:', paketId, 'type:', typeof paketId);
    
    // Parse input to integer
    paketId = parseInt(paketId);
    
    if (!paketId || isNaN(paketId)) {
      return res.status(400).json({ error: 'Invalid paketId' });
    }

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    
    console.log('Mark Used API - URL exists:', !!url);
    console.log('Mark Used API - Token exists:', !!token);

    if (!url || !token) {
      console.log('Mark Used API - No Redis config');
      return res.status(200).json({ success: true, used: [paketId], source: 'none' });
    }

    const redis = new Redis({ url, token });
    
    try {
      // Get current data
      const current = await redis.get(REDIS_KEY);
      let used = current || [];
      
      // Add if not exists
      if (!used.includes(paketId)) {
        used.push(paketId);
      }
      
      // Save back
      await redis.set(REDIS_KEY, used);
      console.log('Mark Used API - Saved:', used);
      
      return res.status(200).json({ success: true, used, source: 'redis' });
    } catch (redisErr) {
      console.error('Mark Used API - Redis error:', redisErr.message);
      return res.status(200).json({ success: true, used: [paketId], source: 'error' });
    }
  } catch (error) {
    console.error('Mark Used API - Fatal error:', error.message);
    return res.status(500).json({ error: 'Internal error', message: error.message });
  }
}
