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

    runScript(scriptID, paramValues) {
        return axios.post('/api/run_script', {
            "script_id": scriptID,
            "param_values": paramValues
        })
    }

    getScriptStatus(scriptRunID) {
        return axios.get('/api/get_script_status', {
            params: {
                "script_run_id": scriptRunID
            }
        })
    }
}

export default API;