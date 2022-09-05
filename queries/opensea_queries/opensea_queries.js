export function getCollectionStats(contractSlug) {
    return new Promise(async (resolve, reject) => {
            try {
                let collectionStats = sessionStorage.getItem('collectionStats');
                let collectionStatsArray = [];
                if (collectionStats !== null) collectionStatsArray = JSON.parse(collectionStats)
                let storedStats = collectionStatsArray.find(a => JSON.parse(a).contractSlug === contractSlug)
                if (storedStats) {
                    console.log('stats is in storage: ', JSON.parse(storedStats).json)
                    resolve(JSON.parse(storedStats).json);
                } else {
                    let resp = await fetch(`https://api.opensea.io/api/v1/collection/${contractSlug}/stats`);
                    let json = await resp.json();
                    collectionStatsArray.push(JSON.stringify({contractSlug, json}));
                    sessionStorage.setItem('collectionStats', JSON.stringify(collectionStatsArray))
                    console.log('stats received from server: ', json)
                    resolve(json)
                }
            } catch (e) {
                reject(e)
            }
        }
    )
}