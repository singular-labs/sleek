import React from "react";
import TextField from "@material-ui/core/es/TextField/TextField";
import {withStyles} from "@material-ui/core";


const styles = {
    textField: {
        width: 500,
    },
    label: {
        fontSize: 24,
    },
    input: {
        paddingTop: 10
    }
};



class ScriptParam extends React.Component {
    render() {
        const {
            classes,
            name,
            value,
            onChange
        } = this.props;

        return (
            <TextField
                label={name}
                className={classes.textField}
                value={value || ""}
                onChange={(event) => onChange(event.target.value)}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                    className: classes.label
                }}
                InputProps={{
                    className: classes.input
                }}
            />
        );
    }
}

export default withStyles(styles)(ScriptParam);
