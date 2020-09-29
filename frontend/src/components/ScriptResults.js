import React from "react";

import Tab from "@material-ui/core/es/Tab/Tab";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Paper from "@material-ui/core/es/Paper/Paper";

import css from './ScriptResults.pcss';


function ScriptResults(props) {
    const {
        logs
    } = props

    return (
        <div className={css.scriptResults}>
            <div className={css.resultTitle}>
                <h5>LOG</h5>
            </div>
            <Paper elevation={1} className={css.logArea}>
                <pre>{logs}</pre>
            </Paper>
        </div>
    );
}

export default ScriptResults;
