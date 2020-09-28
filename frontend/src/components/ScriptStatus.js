import React from "react";
import {
    SCRIPT_RUN_STATE_FAILURE,
    SCRIPT_RUN_STATE_POLLING,
    SCRIPT_RUN_STATE_RUNNING,
    SCRIPT_RUN_STATE_START, SCRIPT_RUN_STATE_SUCCESS
} from "../consts";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircle from '@material-ui/icons/CheckCircle';

import css from "./ScriptStatus.pcss";


function ScriptStatus(props) {
    const { runState } = props;

    switch (runState) {
        case SCRIPT_RUN_STATE_START:
        case SCRIPT_RUN_STATE_RUNNING:
        case SCRIPT_RUN_STATE_POLLING:
            return <CircularProgress/>
        case SCRIPT_RUN_STATE_SUCCESS:
            return <CheckCircle fontSize="large" className={css.successIcon}/>
        case SCRIPT_RUN_STATE_FAILURE:
            return <ErrorIcon fontSize="large" className={css.failureIcon}/>
        default:
            return <div/>
    }
}

export default ScriptStatus;