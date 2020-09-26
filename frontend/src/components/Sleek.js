import React from 'react';

import { hot } from 'react-hot-loader/root'
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/es/TextField/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import ScriptsList from "./ScriptsList";
import ScriptRunner from "./ScriptRunner";
import css from './Sleek.pcss';


class Sleek extends React.Component {
    render() {
        const {
            filteredScripts,
            updateScriptsSearch,
            chosenScriptID,
            updateChosenScript,
            chosenScriptDetails,
            paramValues,
            scriptStatus,
            scriptResult,
            onParamChange,
            runScript
        } = this.props;

        return (
            <div className={css.mainDiv}>
                <Drawer
                    className={css.drawer}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{
                        paper: css.drawerPaper
                    }}
                >
                    <TextField
                        // TODO: understand why we can't use className here and change this :(
                        style={{minHeight: 20, margin: 17}}
                        onChange={(event) => updateScriptsSearch(event.target.value)}
                        placeholder="Search.."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment variant="filled" position="end">
                                    <SearchIcon
                                        className={css.searchIcon}
                                        color="primary"
                                        fontSize="large"
                                    />
                                </InputAdornment>
                            )
                        }}
                    />

                    <Divider />

                    <ScriptsList
                        filteredScripts={filteredScripts}
                        updateChosenScript={updateChosenScript}
                        chosenScriptID={chosenScriptID}
                    />
                </Drawer>
                <ScriptRunner
                    details={chosenScriptDetails}
                    paramValues={paramValues}
                    scriptStatus={scriptStatus}
                    scriptResult={scriptResult}
                    onParamChange={onParamChange}
                    runScript={runScript}
                />
            </div>
        );
    }
}

export default hot(Sleek);
