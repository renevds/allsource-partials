import {profileFetch} from "@allsource/config.axios_instances";

export function claimJuice() {
    return new Promise(async (resolve, reject) => {
        try {
            const {nextClaim,juiceBalance} = await profileFetch(`/fastJuiceClaim`)
            resolve({nextClaim,juiceBalance})
        } catch (e) {
            reject(e)
        }
    })
}