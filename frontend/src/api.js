import axios from 'axios';

class API {
    static getAvailableScripts() {
        return axios.get('/api/get_available_scripts');
    }

    static getScriptDetails(scriptID) {
        return axios.get('/api/get_script_details', {
            params: {
                "script_id": scriptID
            }
        })
    }

    static runScript(scriptID, paramValues) {
        return axios.post('/api/run_script', {
            "script_id": scriptID,
            "param_values": paramValues
        })
    }

    static getScriptStatus(scriptRunID) {
        return axios.get('/api/get_script_status', {
            params: {
                "script_run_id": scriptRunID
            }
        })
    }
}

export default API;