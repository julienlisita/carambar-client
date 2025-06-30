// src/hooks/useJoke.js

import { useEffect, useState, useCallback } from 'react';
import { getRandomJoke } from '../services/jokeService';

export default function useJoke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJoke = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getRandomJoke();
      setJoke(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return { joke, loading, error, fetchJoke };
}