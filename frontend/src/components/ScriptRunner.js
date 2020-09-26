import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import ScriptParam from "./ScriptParam";
import Divider from "@material-ui/core/es/Divider/Divider";
import ScriptResults from "./ScriptResults";
import API from "../api";

import css from './ScriptRunner.pcss';


function ScriptRunner(props) {
    const {
        chosenScriptId,
        scriptStatus,
        scriptResult,
        runScript
    } = props;

    if (!chosenScriptId) {
        return <div/>
    }

    let [scriptDetails, setScriptDetails] = useState(null);
    let [scriptParamsValues, setScriptParamsValues] = useState({});

    useEffect(() => {
        API.getScriptDetails(chosenScriptId).then( response => {
            setScriptDetails(response.data);
            setScriptParamsValues({});
        })
    }, [chosenScriptId])

    if (!scriptDetails) {
        return <div/>
    }

    const paramComponents = scriptDetails.params.map((param) => (
        <Grid item key={param.name}>
            <ScriptParam
                name={param.name}
                value={scriptParamsValues[param.name]}
                onChange={value => {
                    let params = Object.assign({}, scriptParamsValues);
                    params[param.name] = value;
                    setScriptParamsValues(params)
                }}
            />
        </Grid>
    ));

    return (
        <div className={css.content}>
            <div className={css.scriptTop}>
                <span className={css.scriptTitle}>{scriptDetails.name}</span>
                <Button
                    className={css.runButton}
                    onClick={() => runScript(scriptDetails.id, scriptParamsValues)}
                    color="primary"
                    variant="contained"
                >
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

export default ScriptRunner;
