import { connect } from "react-redux"

import Sleek from "./components/Sleek";
import { toggleSideMenu } from "./actions";


function mapStateToProps(state) {
    return {
        isSideMenuOpen: state.isSideMenuOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSideMenu: (shouldOpen) => dispatch(toggleSideMenu(shouldOpen))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)