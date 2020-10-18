import axios from 'axios';
const KEY = 'AIzaSyBsBzVRWvBHkiyg-dKRdshCvX9zdC6AoEU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY,
  },
});
