import React from "react";

import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import {withStyles} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";


const styles = theme => ({
    scriptDescription: {
        width: '95%',
        maxWidth: 575,
        backgroundColor: theme.palette.background.paper,

        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    }
});


class ScriptDescription extends React.Component {
    render() {
        const { classes, key, name, description } = this.props;

        // TODO: add an option to display \n in description
        return (
            <ListItem key={key} className={classes.scriptDescription}>
                <ListItemText
                    primary={name}
                    secondary={description}
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

export default withStyles(styles, { withTheme: true })(ScriptDescription);