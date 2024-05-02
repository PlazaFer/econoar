/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

/**
 * Setup axios interceptors for moralis endpoints requeriments.
 */
const BCRAApi = axios.create({
  baseURL: 'https://api.bcra.gob.ar/',
  headers: {
    'Accept-Language': "es-AR", // can too “en-US”
  },
});

export default BCRAApi;