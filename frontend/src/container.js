import { connect } from "react-redux"

import Sleek from "./components/Sleek";
import { updateScriptsSearch, updateChosenScript, changeParamValue, runScript } from "./actions";


function mapStateToProps(state) {
    return {
        filteredScripts: state.filteredScripts,
        searchString: state.searchString,
        chosenScriptDetails: state.chosenScriptDetails,
        paramValues: state.paramValues,
        scriptResult: state.scriptResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateScriptsSearch: (searchString) => dispatch(updateScriptsSearch(searchString)),
        updateChosenScript: (searchString) => dispatch(updateChosenScript(searchString)),
        onParamChange: (name, value) => dispatch(changeParamValue(name, value)),
        runScript: (scriptID, paramValues) => dispatch(runScript(scriptID, paramValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)
