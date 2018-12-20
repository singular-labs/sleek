import { connect } from "react-redux"

import Sleek from "./components/Sleek";
// import { toggleSideMenu } from "./actions";


function mapStateToProps(state) {
    return {
        availableScripts: state.availableScripts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sleek)