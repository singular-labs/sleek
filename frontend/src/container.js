import { connect } from "react-redux"

import Sleek from "./components/Sleek";
import { changeParamValue, runScript } from "./actions";


function mapStateToProps(state) {
    return {
        paramValues: state.paramValues,
        scriptResult: state.scriptResult,
        scriptStatus: state.scriptStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onParamChange: (name, value) => dispatch(changeParamValue(name, value)),
        runScript: (scriptID, paramValues) => dispatch(runScript(scriptID, paramValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)
