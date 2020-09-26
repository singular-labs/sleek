import React from "react";
import TextField from "@material-ui/core/es/TextField/TextField";

import css from './ScriptParam.pcss';


function ScriptParam(props) {
    const {
        name,
        value,
        onChange
    } = props;

    return (
        <TextField
            label={name}
            className={css.textField}
            value={value || ""}
            onChange={(event) => onChange(event.target.value)}
            margin="normal"
            InputLabelProps={{
                shrink: true,
                className: css.label
            }}
            InputProps={{
                className: css.input
            }}
        />
    );
}

export default ScriptParam;
