import React from "react";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import ScriptParam from "./ScriptParam";
import Divider from "@material-ui/core/es/Divider/Divider";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import Paper from "@material-ui/core/es/Paper/Paper";

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
    scriptResults: {
        marginLeft: 20,
        flexGrow: 1,
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
    logArea: {
        marginTop: 10,
        height: "100%"
    }
};

class ScriptRunner extends React.Component {
    render() {
        const {
            classes,
            details,
            paramValues,
            onParamChange
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
                    <Button className={classes.runButton} color="primary" variant="contained">
                        Run Script
                    </Button>
                </div>
                <div className={classes.scriptParams}>
                    <Grid container spacing={24}>
                        {paramComponents}
                    </Grid>
                </div>
                <Divider/>
                <div className={classes.scriptResults}>
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={0}
                    >
                        <Tab label="Log" />
                    </Tabs>
                    <Paper elevation={1} className={classes.logArea}>
                        This is a log
                    </Paper>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ScriptRunner);
