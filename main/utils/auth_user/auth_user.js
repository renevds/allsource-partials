import {profileFetch} from "@allsource/config.axios_instances";

export function authUser() {
    return new Promise(async (resolve, reject) => {
        try {
            localStorage.setItem('isAuthing', 'true')
            const {msg, redir,refPage} = await profileFetch(`/auth${window.location.search}&isReact=true`);

            if (msg === 'done') {
                console.log('its done')
                //todo
                resolve(refPage)
            } else {
                window.location.href = redir || '/'
            }
        } catch (e) {
            reject(e);
        }
    })
}