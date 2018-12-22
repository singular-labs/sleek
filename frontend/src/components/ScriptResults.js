import React from "react";

import Tab from "@material-ui/core/es/Tab/Tab";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Paper from "@material-ui/core/es/Paper/Paper";
import {withStyles} from "@material-ui/core";


const styles = {
    scriptResults: {
        marginLeft: 20,
        flexGrow: 1,
        marginBottom: 20
    },
    logArea: {
        marginTop: 10,
        height: "100%"
    }
};


class ScriptResults extends React.Component {
    render() {
        const {
            classes,
            scriptResult
        } = this.props;

        let resultStr = "not ready";
        if (scriptResult) {
            resultStr = scriptResult["success"] ? "Success" : "Failure";
        }

        return (
            <div className={classes.scriptResults}>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value={0}
                >
                    <Tab label="Log" />
                </Tabs>
                <Paper elevation={1} className={classes.logArea}>
                    This is a log - {resultStr}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ScriptResults);
