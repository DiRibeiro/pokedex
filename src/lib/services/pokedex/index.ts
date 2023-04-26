import axios from 'axios';

const getView = async () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
    .then(response => response.data);
};

export { getView };