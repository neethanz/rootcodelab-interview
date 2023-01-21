import axios from 'axios';

const login = (username: string, password: string) => {
  return axios({
    method: 'post',
    url: 'https://stage-api.serw.io/v1/auth/local/login',
    data: {
      email: username,
      password: password,
    },
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

const fetchAllSongs = () => {
  axios
    .get('https://itunes.apple.com/search?term=all')
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

const fetchParicularArtistSongs = (keyword: string) => {
  keyword = keyword.replace(' ', '+');
  return axios
    .get(`https://itunes.apple.com/search?term=${keyword}`)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

export default {fetchAllSongs, fetchParicularArtistSongs, login};
