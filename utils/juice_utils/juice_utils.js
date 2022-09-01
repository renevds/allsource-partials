import {mainFetch} from "@allsource/config.axios_instances";

export function claimJuice() {
    return new Promise(async (resolve, reject) => {
        try {
            const {nextClaim,juiceBalance} = await mainFetch(`/fastJuiceClaim`)
            resolve({nextClaim,juiceBalance})
        } catch (e) {
            reject(e)
        }
    })
}