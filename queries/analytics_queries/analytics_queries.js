import {analyticsFetch} from "@allsource/config.axios_instances";

export function volatilityScore(contractAddress) {
  return analyticsFetch('/volatilityScore', {params: {contractAddress}}).then(a => a.data.value)
}

const calcAbsDist = (a, b) => {
  return Math.abs(a - b)
}

export async function getYesterdayMarketData(contractAddress) {
  let ret = await analyticsFetch('/getRecentMarketData', {params: {contractAddress}}).then(a => a.data)
  ret = ret.sort((a, b) => a.timestamp - b.timestamp)
  const cur = Date.now() - (24 * 60 * 60 * 1000);
  let chosen = ret[0];
  let dis = calcAbsDist(cur, ret[0].timestamp);
  for (let i = 0; i < ret.length; i++) {
      const newDis = calcAbsDist(cur, ret[i].timestamp);
      if(newDis < dis){
        dis = newDis;
        chosen = i;
      }
  }
  return [ret[chosen], ret[chosen - 1]];
}

export function getContractData(contractAddress) {
  return analyticsFetch('/getContractData', {params: {contractAddress}}).then(a => a.data)
}