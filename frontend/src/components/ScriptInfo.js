import React from "react";

import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import {withStyles} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";


const styles = theme => ({
    scriptInfo: {
        width: '95%',
        maxWidth: 575,
        backgroundColor: theme.palette.background.paper,

        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    }
});


class ScriptInfo extends React.Component {
    render() {
        const { classes, scriptID, scriptName, scriptDescription, updateChosenScript } = this.props;

        // TODO: add an option to display \n in description
        return (
            <ListItem button
                key={scriptID}
                className={classes.scriptInfo}
                onClick={() => updateChosenScript(scriptID)}
            >
                <ListItemText
                    primary={scriptName}
                    secondary={scriptDescription}
                />
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ScriptInfo);