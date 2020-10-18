import axios from 'axios';
const KEY = 'AIzaSyBsBzVRWvBHkiyg-dKRdshCvX9zdC6AoEU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    // part: 'snippet contentDetails statistics ',
    part: 'snippet, statistics',
    key: KEY,
  },
});

// video url:https://www.youtube.com/watch?v=
