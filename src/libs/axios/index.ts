import Axios from 'axios';
import { GRAPHQL_API_URL } from '../../common/configs/env';

const axios = Axios.create({ baseURL: GRAPHQL_API_URL });

export default axios;
