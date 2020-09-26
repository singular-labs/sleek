import React from "react";

import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";
import css from './ScriptInfo.pcss';


class ScriptInfo extends React.Component {
    render() {
        const { scriptId, scriptName, scriptDescription, setChosenScriptId } = this.props;

        // TODO: add an option to display \n in description
        return (
            <ListItem button
                key={scriptId}
                className={css.scriptInfo}
                onClick={() => {
                    setChosenScriptId(scriptId)
                }}
            >
                <ListItemText
                    primary={scriptName}
                    secondary={scriptDescription}
                    classes={{
                        primary: css.title,
                        secondary: css.secondaryTitle
                    }}
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

export default ScriptInfo;