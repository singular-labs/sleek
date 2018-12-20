// import {} from "./actions";

import {connect} from "react-redux"
import Sleek from "./components/Sleek";

function mapStateToProps(state) {
    return {
        isSideMenuOpen: state.isSideMenuOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)