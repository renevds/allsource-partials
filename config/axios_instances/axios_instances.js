import axios from 'axios';
import lzwCompress from "lzwcompress";

//Utils
import {decompressArray} from "./utils/axiosTools";
import {cachedAxiosInstance} from "./utils/axiosCache";


const isProduction = process.env.NODE_ENV !== "development";
console.log(`This is ${isProduction ? 'production' : 'development'}`)

const NID = parseInt(process.env.REACT_APP_NID);

if(NID === undefined){
  throw 'Please define REACT_APP_NID in .env file.'
}

//Set server URLS
export const socialServerHost = isProduction ? "https://social.allsource.io" : "http://localhost:3063";
export const analyticsServerHost = isProduction ? "https://analytics-api.allsource.io": "https://delta.extensionsworld.com/";
export const profileServerHost = isProduction ? "https://profile-api.allsource.io" : "https://profile-api.juicescan.com";
export const juiceServerHost = isProduction ? "https://juice-api.allsource.io" : "https://juice-api.juicescan.com";
export const projectServerHost = isProduction ? "https://projects-api.allsource.io": "https://projects-api.allsource.io";
export const chartDataHost = isProduction ? "https://analytics-api.allsource.io" :"https://delta.extensionsworld.com/"

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

const mainHosts = {
  63: socialServerHost,
  64: profileServerHost,
  66: juiceFetch,
  69: projectFetch,
  80: isProduction ? analyticsServerHost : "http://localhost:3080",
}

export const mainHost = mainHosts[NID];

export const mainFetch = axios.create({
  baseURL: mainHost,
  withCredentials: true,
  credentials: "include"
})

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