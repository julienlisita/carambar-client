// src/services/jokeService.js

import api from './api';

export async function getRandomJoke() {
  try {
    const response = await api.get('/jokes/random');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de la blague:', error);
    throw new Error(
      error.response?.data?.message || 'Erreur serveur lors de la récupération de la blague'
    );
  }
}