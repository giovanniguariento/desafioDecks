import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/new/draw/?count=21',
});

export default api;