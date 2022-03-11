import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '8d8496a857e025fc91eb2c0d819ab3d9',
    language: 'ko-KR',
  },
});

export default instance;