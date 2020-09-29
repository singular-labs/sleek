import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import ScriptParam from "./ScriptParam";
import Divider from "@material-ui/core/es/Divider/Divider";
import ScriptResults from "./ScriptResults";
import API from "../api";
import {
    SCRIPT_RUN_STATE_NONE, SCRIPT_RUN_STATE_START, SCRIPT_RUN_STATE_RUNNING,
    SCRIPT_RUN_STATE_POLLING, SCRIPT_RUN_STATE_FAILURE, SCRIPT_POLLING_INTERVAL
} from "../consts"

import css from './ScriptRunner.pcss';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import ScriptStatus from "./ScriptStatus";


function ScriptRunner(props) {
    const {
        chosenScriptId
    } = props;

    if (!chosenScriptId) {
        return <div/>
    }

    let [scriptParamsValues, setScriptParamsValues] = useState({});

    const scriptDetails = useScriptDetails(chosenScriptId,
        () => setScriptParamsValues({}))

    const [scriptRunState, scriptSetRunState, scriptLogs] = useRunScript(
        chosenScriptId, scriptParamsValues
    )

    if (!scriptDetails) {
        return <div/>
    }

    const paramComponents = scriptDetails.params.map((param) => (
        <Grid item key={param.name} className={css.gridCell}>
            <ScriptParam
                name={param.name}
                type={param.type}
                options={param.options}
                value={scriptParamsValues[param.name]}
                scriptParamsValues={scriptParamsValues}
                setScriptParamsValues={setScriptParamsValues}
            />
        </Grid>
    ));

    return (
        <div className={css.content}>
            <Toolbar />     {/* Added only to make sure the content is below the toolbar */}
            <div className={css.scriptTop}>
                <span className={css.scriptTitle}>{scriptDetails.name}</span>
                <Button
                    className={css.runButton}
                    onClick={() => scriptSetRunState(SCRIPT_RUN_STATE_START)}
                    color="primary"
                    variant="contained"
                    disabled={isScriptRunning(scriptRunState)}
                >
                    Run Script
                </Button>
                <div className={css.scriptParams}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        {paramComponents}
                    </Grid>
                </div>
                <div className={css.scriptStatus}>
                    <ScriptStatus runState={scriptRunState}/>
                </div>
            </div>
            <Divider/>
            <ScriptResults
                logs={scriptLogs}
            />
        </div>
    );
}

function isScriptRunning(scriptRunState) {
    return (
        scriptRunState === SCRIPT_RUN_STATE_START ||
        scriptRunState === SCRIPT_RUN_STATE_RUNNING ||
        scriptRunState === SCRIPT_RUN_STATE_POLLING
    )
}

function useScriptDetails(scriptId, callback=null) {
    let [scriptDetails, setScriptDetails] = useState(null);

    useEffect(() => {
        API.getScriptDetails(scriptId).then( response => {
            setScriptDetails(response.data);
            if (callback) {
                callback()
            }
        })
    }, [scriptId])

    return scriptDetails
}

function useRunScript(scriptID, paramValues) {
    const [scriptRunID, setScriptRunID] = useState(null);
    const [scriptLogs, setScriptLogs] = useState("");
    const [scriptRunState, setScriptRunState] = useState(SCRIPT_RUN_STATE_NONE)

    // Make sure if script is changed we reset the state
    useEffect(() => {
        setScriptRunID(null);
        setScriptLogs("");
        setScriptRunState(SCRIPT_RUN_STATE_NONE);
    }, [scriptID])

    // Run script if in "start" state
    useEffect(() => {
        if (scriptRunState === SCRIPT_RUN_STATE_START) {
            setScriptRunID(null);
            setScriptLogs("");
            API.runScript(scriptID, paramValues).then(
                response => {
                    setScriptRunState(SCRIPT_RUN_STATE_RUNNING);
                    setScriptRunID(response.data["script_run_id"]);
                },
                err => {
                    console.log(err);
                    setScriptRunState(SCRIPT_RUN_STATE_FAILURE);
                }
            );
        }
    }, [scriptRunState]);

    // If in the running state, move to polling state after a timeout interval
    useEffect(() => {
        if (scriptRunState === SCRIPT_RUN_STATE_RUNNING) {
            const timeout = setTimeout(() => {
                setScriptRunState(SCRIPT_RUN_STATE_POLLING);
            }, SCRIPT_POLLING_INTERVAL)
            return () => clearTimeout(timeout);
        }
    }, [scriptRunState, scriptRunID])

    // If in the polling state, poll the results and update the state accordingly
    useEffect(() => {
        if (scriptRunState === SCRIPT_RUN_STATE_POLLING) {
            API.getScriptStatus(scriptRunID).then(
                response => {
                    setScriptLogs(scriptLogs + response.data["logs"]);
                    setScriptRunState(response.data["run_state"])
                    console.log("Run state: " + response.data["run_state"])
                },
                err => {
                    console.log(err);
                    setScriptRunState(SCRIPT_RUN_STATE_FAILURE);
                }
            )
        }
    }, [scriptRunState, scriptRunID]);

    return [scriptRunState, setScriptRunState, scriptLogs];
}

export default ScriptRunner;
