import { connect } from "react-redux"

import Sleek from "./components/Sleek";
import { updateScriptsSearch, updateChosenScript, changeParamValue } from "./actions";


function mapStateToProps(state) {
    return {
        filteredScripts: state.filteredScripts,
        searchString: state.searchString,
        chosenScript: state.chosenScript,
        paramValues: state.paramValues
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateScriptsSearch: (searchString) => dispatch(updateScriptsSearch(searchString)),
        updateChosenScript: (searchString) => dispatch(updateChosenScript(searchString)),
        onParamChange: (name, value) => dispatch(changeParamValue(name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)
