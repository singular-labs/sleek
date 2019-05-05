import React from "react";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import ScriptParam from "./ScriptParam";
import Divider from "@material-ui/core/es/Divider/Divider";
import ScriptResults from "./ScriptResults";

import css from './ScriptRunner.pcss';


class ScriptRunner extends React.Component {
    render() {
        const {
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
            <div className={css.content}>
                <div className={css.scriptTop}>
                    <span className={css.scriptTitle}>{details.name}</span>
                    <Button className={css.runButton} onClick={() => runScript(details.id, paramValues)} color="primary" variant="contained">
                        Run Script
                    </Button>
                </div>
                <div className={css.scriptParams}>
                    <Grid container>
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

export default ScriptRunner;
