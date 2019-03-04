import React from "react";

import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import {withStyles} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";

import css from './ScriptInfo.pcss';


const styles = theme => ({
    scriptInfo: {
        width: '95%',
        maxWidth: 575,
        backgroundColor: theme.palette.background.paper,

        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    pasten2: {
        color: "red"
    }
});


class ScriptInfo extends React.Component {
    render() {
        const { classes, scriptID, scriptName, scriptDescription } = this.props;

        // TODO: add an option to display \n in description
        return (
            <ListItem button
                key={scriptID}
                className={classes.scriptInfo}
                onClick={() => this.onScriptClick(scriptID)}
            >
                <ListItemText
                    primary={scriptName}
                    secondary={scriptDescription}
                    classes={{primary: css.pasten }}
                />
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
        )
    }

    onScriptClick(scriptID) {
        const { chosenScriptID, updateChosenScript} = this.props;
        if (chosenScriptID !== scriptID) {
            updateChosenScript(scriptID);
        }
    }

}

export default withStyles(styles, { withTheme: true })(ScriptInfo);