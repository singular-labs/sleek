import React from 'react';

import List from '@material-ui/core/List';

import ScriptInfo from './ScriptInfo';
import css from './ScriptsList.pcss';


class ScriptsList extends React.Component {
    render () {
        const { filteredScripts, setChosenScriptId, chosenScriptId } = this.props;

        const scripts = filteredScripts.map((script) => {
            return (
                <ScriptInfo
                    key={script.id}
                    scriptId={script.id}
                    scriptName={script.name}
                    scriptDescription={script.description}
                    setChosenScriptId={setChosenScriptId}
                    chosenScriptId={chosenScriptId}
                />
            )
        });

        return (
            <List className={css.List}>
                {scripts}
            </List>
        );
    }
}


export default ScriptsList;