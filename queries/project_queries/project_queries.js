import {projectFetch} from "@allsource/config.axios_instances";

export function getProjectCard(contractAddress) {
  return projectFetch('/getProjectCard', {params: {contractAddress}}).then(a => a.data)
}