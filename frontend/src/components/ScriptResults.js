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
            scriptStatus
        } = this.props;

        let logs = "";
        if (scriptStatus.scriptRunID !== null) {
            logs = scriptStatus.logs;
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
                    <pre>{logs}</pre>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ScriptResults);
