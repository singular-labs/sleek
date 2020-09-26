import { connect } from "react-redux"

import Sleek from "./components/Sleek";
import { runScript } from "./actions";


function mapStateToProps(state) {
    return {
        scriptResult: state.scriptResult,
        scriptStatus: state.scriptStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        runScript: (scriptID, paramValues) => dispatch(runScript(scriptID, paramValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)
