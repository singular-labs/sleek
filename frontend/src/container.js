import { connect } from "react-redux"

import Sleek from "./components/Sleek";
import { updateScriptsSearch } from "./actions";


function mapStateToProps(state) {
    return {
        filteredScripts: state.filteredScripts,
        searchString: state.searchString
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateScriptsSearch: (searchString) => dispatch(updateScriptsSearch(searchString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)