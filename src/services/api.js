import axios from 'axios';

const api_unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/'
});

const api_pexels = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers:{
        'Authorization': '563492ad6f91700001000001605b21260cd745d2baff405d268a0420'
    }
});

export {
    api_pexels,
    api_unsplash
};