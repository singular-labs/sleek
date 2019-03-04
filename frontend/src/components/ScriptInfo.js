import React from "react";

import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import {Typography, withStyles} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";
import css from './ScriptInfo.pcss';

const styles = theme => ({
    scriptInfo: {
        width: '95%',
        maxWidth: 575,

        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Open Sans',
        fontSize: '14px',
        fontWeight: 600,
        color: '#454b56',
    }
});


class ScriptInfo extends React.Component {
    render() {
        const { classes, scriptID, scriptName, scriptDescription } = this.props;

        // TODO: add an option to display \n in description
        return (
            <ListItem button
                key={scriptID}
                className={css.container}
                onClick={() => this.onScriptClick(scriptID)}
            >
                <ListItemText
                    disableTypography
                    // primaryTypographyProps={{root: css.title}}
                    primary={<Typography className={classes.scriptInfo}>{scriptName}</Typography>}
                    // secondary={<Typography classes={{root: css.title}}>{scriptDescription}</Typography>}
                    // classes={{root: css.title, inset: true}}
                >
                </ListItemText>
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