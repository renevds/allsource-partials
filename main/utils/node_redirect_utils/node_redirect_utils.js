import { profileFetch } from "@allsource/config.axios_instances";

export function redirectToJuice(refPage) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await profileFetch(`/goToJuice`);
            window.location.href = redir + (refPage || '')
        } catch (e) {
            reject(e)
        }
    })
}

export function redirectToProfile(refPage) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await profileFetch(`/goToProfile?`)
            window.location.href = redir + (refPage || '')
        } catch (e) {
            reject(e)
        }
    })
}

export function redirectToProject(contractAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await profileFetch(`/goToProjects?/wiki/${contractAddress}`)
            console.log(`${redir}/wiki/${contractAddress}`)
            //  window.location.href =`${redir}/wiki/${contractAddress}`
        } catch (e) {
            reject(e)
        }
    })
}