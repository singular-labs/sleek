import React from "react";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import ScriptParam from "./ScriptParam";
import Divider from "@material-ui/core/es/Divider/Divider";
import ScriptResults from "./ScriptResults";


const styles = {
    content: {
        flexGrow: 1,
        marginLeft: 575
    },
    scriptTop: {
        marginLeft: 20,
        flexGrow: 1
    },
    scriptParams: {
        marginLeft: 20,
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 20
    },
    scriptTitle: {
        fontWeight: "bold",
        fontSize: 28
    },
    runButton: {
        float: "right",
        marginRight: 20
    },

};


class ScriptRunner extends React.Component {
    render() {
        const {
            classes,
            details,
            paramValues,
            scriptStatus,
            scriptResult,
            onParamChange,
            runScript
        } = this.props;

        if (!details) {
            return <div/>
        }

        const paramComponents = details.params.map((param) => (
            <Grid item key={param.name}>
                <ScriptParam
                    name={param.name}
                    value={paramValues[param.name]}
                    onChange={(value) => onParamChange(param.name, value)}
                />
            </Grid>
        ));

        return (
            <div className={classes.content}>
                <div className={classes.scriptTop}>
                    <span className={classes.scriptTitle}>{details.name}</span>
                    <Button className={classes.runButton} onClick={() => runScript(details.id, paramValues)} color="primary" variant="contained">
                        Run Script
                    </Button>
                </div>
                <div className={classes.scriptParams}>
                    <Grid container spacing={24}>
                        {paramComponents}
                    </Grid>
                </div>
                <Divider/>
                <ScriptResults
                    scriptStatus={scriptStatus}
                    scriptResult={scriptResult}
                />
            </div>
        );
    }
}

export default withStyles(styles)(ScriptRunner);
