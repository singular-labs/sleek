import React from 'react';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import ScriptDescription from './ScriptDescription'


const styles = theme => ({
    scriptsList: {
        width: '100%',
        maxWidth: 575,
        backgroundColor: theme.palette.background.paper,
    },
});


class ScriptsList extends React.Component {
    render () {
        const { classes, availableScripts } = this.props;

        const scripts = availableScripts.map((script) => {
            return (
                <ScriptDescription
                    key={script.id}
                    name={script.name}
                    description={script.description}
                    created_by={script.created_by}
                />
            )
        });

        return (
            <List className={classes.scriptsList}>
                {scripts}
            </List>
        );
    }
}


export default withStyles(styles)(ScriptsList);