import { getView } from '../../../../lib/services/pokedex';

const get = async () => {
  try {
    const response = await getView();
    // console.log(response)
    return response;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

export {
  get
};