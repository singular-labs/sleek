import React from 'react';

import { hot } from 'react-hot-loader/root'
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/es/TextField/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import ScriptsList from "./ScriptsList";
import ScriptRunner from "./ScriptRunner";


const drawerWidth = 575;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px 0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        height: 75
    },
    searchField: {
        flexGrow: 1,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 5
    },
    searchAdornment: {
        variant: 'filled',
        position: 'end'
    },
    searchIcon: {
        marginBottom: 5
    }
});



class Sleek extends React.Component {
    render() {
        const {
            classes,
            filteredScripts,
            updateScriptsSearch,
            updateChosenScript,
            chosenScriptDetails,
            paramValues,
            onParamChange
        } = this.props;

        return (
            <div>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <TextField
                            className={classes.searchField}
                            onChange={(event) => updateScriptsSearch(event.target.value)}
                            placeholder="Search.."
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment className={classes.searchAdornment}>
                                        <SearchIcon
                                            className={classes.searchIcon}
                                            color="primary"
                                            fontSize="large"
                                        />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>

                    <Divider />

                    < ScriptsList
                        filteredScripts={filteredScripts}
                        updateChosenScript={updateChosenScript}
                    />
                </Drawer>
                Bla
                <ScriptRunner
                    details={chosenScriptDetails}
                    paramValues={paramValues}
                    onParamChange={onParamChange}
                />
            </div>
        );
    }
}

export default hot(withStyles(styles, { withTheme: true })(Sleek));
