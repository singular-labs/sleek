import axios from 'axios';

class API {
    getAvailableScripts() {
        return axios.get('/api/get_available_scripts');
    }

    getScriptDetails(scriptID) {
        return axios.get('/api/get_script_details', {
            params: {
                "script_id": scriptID
            }
        })
    }
}

export default API;