const API_KEY = 'at_9ke4MoEG5qkCf2Cepxhv4OU7Z20wd'

export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`
        https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`);

    return await response.json();
}