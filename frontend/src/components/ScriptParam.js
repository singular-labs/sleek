import React from "react";
import TextField from "@material-ui/core/es/TextField/TextField";

import css from './ScriptParam.pcss';

function transformParameterName(parameterName) {
    if (parameterName) {
        parameterName = parameterName.replace('_', ' ')
    }
    return parameterName
}

function ScriptParam(props) {
    const {
        name,
        value,
        onChange
    } = props;

    return (
        <div
            className={css.textField}
        >
            <div
                className={css.label}
            >
                {transformParameterName(name)}
            </div>
            <input
                value={value || ""}
                className={css.input}
                onChange={(event) => onChange(event.target.value)}
            >
            </input>
        </div>
    );
}

export default ScriptParam;
