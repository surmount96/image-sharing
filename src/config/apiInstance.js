import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL;

axios.defaults.baseURL = baseUrl;

const apiInstance = axios.create();

export default apiInstance;
