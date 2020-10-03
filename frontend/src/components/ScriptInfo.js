import React from "react";

import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import css from './ScriptInfo.pcss';


function ScriptInfo(props) {
    const { script, setChosenScriptId } = props;
    const scriptId = script.id;

    // TODO: add an option to display \n in description
    return (
        <ListItem button
            key={scriptId}
            className={css.scriptInfo}
            onClick={() => {
                setChosenScriptId(scriptId)
            }}
        >
            <div style={{display: 'block'}}>
                <div className={css.textContainer}>
                    <ListItemText
                        primary={script.name}
                        secondary={script.description}
                        classes={{
                            primary: css.scriptInfoTitle,
                            secondary: css.secondaryTitle
                        }}
                    />
                    <img
                        src="/static/resources/log-file-format.svg"
                        className={css.scriptAvatar}
                    />
                </div>
                <div className={css.updateInfo}>
                    <div className={css.updateUser}>
                        Created by {script.creating_user}
                    </div>
                    <div className={css.updateTime}>
                        {script.creation_time}
                    </div>
                </div>
            </div>
        </ListItem>
    )
}

export default ScriptInfo;