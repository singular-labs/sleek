import React from 'react';

import List from '@material-ui/core/List';

import ScriptInfo from './ScriptInfo';
import css from './ScriptsList.pcss';


//const styles = theme => ({
//    scriptsList: {
//    width: '100%',
//    maxWidth: 575,
//    backgroundColor: theme.palette.background.paper,
//},
//});


class ScriptsList extends React.Component {
    render () {
        const { filteredScripts, updateChosenScript, chosenScriptID } = this.props;

        const scripts = filteredScripts.map((script) => {
            return (
                <ScriptInfo key={script.id}
                    scriptID={script.id}
                    scriptName={script.name}
                    scriptDescription={script.description}
                    updateChosenScript={updateChosenScript}
                    chosenScriptID={chosenScriptID}
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


export default  ScriptsList;