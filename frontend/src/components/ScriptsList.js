import React from 'react';

import List from '@material-ui/core/List';

import ScriptInfo from './ScriptInfo';
import css from './ScriptsList.pcss';


function ScriptsList(props) {
    const { filteredScripts, setChosenScriptId } = props;

    const scripts = filteredScripts.map((script) => {
        return (
            <ScriptInfo
                key={script.id}
                script={script}
                setChosenScriptId={setChosenScriptId}
            />
        )
    });

    return (
        <List className={css.scriptsList}>
            {scripts}
        </List>
    );
}


export default ScriptsList;