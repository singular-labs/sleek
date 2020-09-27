import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/es/Button/Button";
import Grid from '@material-ui/core/Grid';
import ScriptParam from "./ScriptParam";
import Divider from "@material-ui/core/es/Divider/Divider";
import ScriptResults from "./ScriptResults";
import API from "../api";

import css from './ScriptRunner.pcss';


const SCRIPT_RUN_STATE_NONE = "none"
const SCRIPT_RUN_STATE_START = "start"
const SCRIPT_RUN_STATE_RUNNING = "running"
const SCRIPT_RUN_STATE_POLLING = "polling"
const SCRIPT_RUN_STATE_SUCCESS = "success"
const SCRIPT_RUN_STATE_FAILED = "failed"

const SCRIPT_POLLING_INTERVAL = 100;


function ScriptRunner(props) {
    const {
        chosenScriptId
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

    const [scriptRunState, scriptSetRunState, scriptLogs] = useRunScript(
        chosenScriptId, scriptParamsValues
    )

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
                    onClick={() => scriptSetRunState(SCRIPT_RUN_STATE_START)}
                    color="primary"
                    variant="contained"
                    disabled={isScriptRunning(scriptRunState)}
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

function useRunScript(scriptID, paramValues) {
    const [scriptRunID, setScriptRunID] = useState(null);
    const [scriptLogs, setScriptLogs] = useState("");
    const [scriptRunState, setScriptRunState] = useState(SCRIPT_RUN_STATE_NONE)

    // Run script if in "start" state
    useEffect(() => {
        if (scriptRunState === SCRIPT_RUN_STATE_START) {
            setScriptRunID(null);
            API.runScript(scriptID, paramValues).then(
                response => {
                    setScriptRunState(SCRIPT_RUN_STATE_RUNNING);
                    setScriptRunID(response.data["script_run_id"]);
                },
                err => {
                    console.log(err);
                    setScriptRunState(SCRIPT_RUN_STATE_FAILED);
                }
            );
        }
    }, [scriptID, scriptRunState]);

    // If in the running state, move to polling state after a timeout interval
    useEffect(() => {
        if (scriptRunState === SCRIPT_RUN_STATE_RUNNING) {
            const timeout = setTimeout(() => {
                setScriptRunState(SCRIPT_RUN_STATE_POLLING);
            }, SCRIPT_POLLING_INTERVAL)
            return () => clearTimeout(timeout);
        }
    }, [scriptID, scriptRunState, scriptRunID])

    // If in the polling state, poll the results and update the state accordingly
    useEffect(() => {
        if (scriptRunState === SCRIPT_RUN_STATE_POLLING) {
            API.getScriptStatus(scriptRunID).then(
                response => {
                    setScriptLogs(response.data["logs"]);

                    if (response.data["is_done"]) {
                        // TODO: Handle script failures!! (we don't currently get them from the backend)
                        setScriptRunState(SCRIPT_RUN_STATE_SUCCESS);
                    } else {
                        setScriptRunState(SCRIPT_RUN_STATE_RUNNING)
                    }
                },
                err => {
                    console.log(err);
                    setScriptRunState(SCRIPT_RUN_STATE_FAILED);
                }
            )
        }
    }, [scriptRunState, scriptRunID]);

    return [scriptRunState, setScriptRunState, scriptLogs];
}

export default ScriptRunner;
