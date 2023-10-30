import { GRAPHQL_API_URL } from '@/configs';
import Axios from 'axios';

const axios = Axios.create({ baseURL: GRAPHQL_API_URL });

export default axios;
