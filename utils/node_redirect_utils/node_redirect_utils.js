import {mainFetch} from "@allsource/config.axios_instances";


export function redirectToJuice(refPage) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await mainFetch(`/goToJuice`);
            window.location.href = redir + (refPage || '')
        } catch (e) {
            reject(e)
        }
    })
}

export function redirectToProfile(refPage) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await mainFetch(`/goToProfile?`)
            window.location.href = redir + (refPage || '')
        } catch (e) {
            reject(e)
        }
    })
}

export function redirectToProject(contractAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await mainFetch(`/goToProjects?/wiki/${contractAddress}`)
            console.log(`${redir}/wiki/${contractAddress}`)
            //  window.location.href =`${redir}/wiki/${contractAddress}`
        } catch (e) {
            reject(e)
        }
    })
}

export function redirectToLogin() {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { redir } } = await mainFetch(`/goToLogin`)

            window.location.href =redir
        } catch (e) {
            reject(e)
        }
    })
}
