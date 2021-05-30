import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID BzDh5WqsVXijckuvhbfpjbqnIQzyZqJw2i8g_PoVDd0'
      }
});