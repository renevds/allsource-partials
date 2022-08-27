import axios from 'axios';
import lzwCompress from "lzwcompress";

//Utils
import {decompressArray} from "./utils/axiosTools";
import {cachedAxiosInstance} from "./utils/axiosCache";


const isProduction = process.env.NODE_ENV !== "development";

const NID = parseInt(process.env.REACT_APP_NID);

if(NID === undefined){
  throw 'Please define REACT_APP_NID in .env file.'
}

//Set server URLS
const socialServerHost = isProduction ? "https://social.allsource.io" : "http://localhost:3063";
const analyticsServerHost = "https://delta.extensionsworld.com";
const profileServerHost = isProduction ? "https://profile.allsource.io" : "http://localhost:3064";
const juiceServerHost = isProduction ? "https://juice.allsource.io" : "https://juice.juicescan.com";
const projectServerHost = "https://projects.allsource.io";
const chartDataHost = "https://delta.extensionsworld.com/";


const getCredentials = id => ({
  credentials: NID === id ? "include" : "same-origin",
  withCredentials: NID === id
})

export const chartDataFetch = new cachedAxiosInstance(axios.create({
  baseURL: `${chartDataHost}`,
  ...getCredentials(80)
}))

chartDataFetch.axiosInstance.interceptors.response.use(function (response) {
  const decoded = lzwCompress.unpack(response.data.data);
  try {
    response.data.data = JSON.parse(decoded);
  } catch (e) {
    console.log("Could not decode.")
    console.log(response.request.responseURL)
    response.data = {data: []};
    return response;
  }
  if (Array.isArray(response.data.data)) {
    response.data.data = decompressArray(response.data.data, response.data.keys);
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});


export const chartDataFetchNoLZW = new cachedAxiosInstance(axios.create({
  baseURL: `${chartDataHost}`,
  ...getCredentials(80)
}))


export const juiceFetch = axios.create({
  baseURL: `${juiceServerHost}`,
  ...getCredentials(66)
});


export const profileFetch = axios.create({
  baseURL: `${profileServerHost}`,
  ...getCredentials(64)
});


export const projectFetch = axios.create({
  baseURL: `${projectServerHost}`,
  ...getCredentials(69)
});


export const socialFetch = axios.create({
  baseURL: `${socialServerHost}`,
  ...getCredentials(63)
});


export const analyticsFetch = axios.create({
  baseURL: `${analyticsServerHost}`,
  ...getCredentials(80)
});

const axiosMainConfigs = {
  80: analyticsFetch,
  66: juiceFetch,
  64: profileFetch,
  69: projectFetch,
  63: socialFetch,
}

export const mainFetch = axiosMainConfigs[NID];

mainFetch.interceptors.response.use(async (response) => {
  if (response.data.needAuth) {
    window.location.href = response.data.redir
  }
  return response;
}, (error) => {
  if (error) {
    console.log(error)
  }
  return Promise.reject(error);
});