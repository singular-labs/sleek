import axios from 'axios';

class API {
    getAvailableScripts() {
        return axios.get('/api/get_available_scripts');
    }
}

export default API;