import { hot } from 'react-hot-loader/root'

import React, { useState } from 'react';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import SearchField from "./SearchField";
import ScriptsList from "./ScriptsList";
import ScriptRunner from "./ScriptRunner";
import css from './Sleek.pcss';


function filterScripts(scripts, filterString) {
    if (!filterString) {
        return scripts
    } else {
        const searchableScriptAttributes = ['name', 'description'];
        const lowerFilterString = filterString.toLowerCase();

        return scripts.filter((script) => {
            return searchableScriptAttributes.some((scriptAttr) => {
                    return script[scriptAttr].toLowerCase().indexOf(lowerFilterString) > -1
                }
            )
        })

    }
}


function Sleek(props) {
    const {
        chosenScriptID,
        updateChosenScript,
        chosenScriptDetails,
        paramValues,
        scriptStatus,
        scriptResult,
        onParamChange,
        runScript
    } = props;

    let scripts = [
        {'id': 1, 'name': 'Script 1', 'description': 'Get ready to be wowed!'},
        {'id': 2, 'name': 'Script 2', 'description': 'You have never seen such a script!'},
        {'id': 3, 'name': 'Script 3', 'description': 'Run when you are bored!'},
    ]

    let [searchValue, setSearchValue] = useState('');

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
                <SearchField
                    searchValue={searchValue}
                    onSearchChange={(event) => {setSearchValue(event.target.value)}}
                />

                <Divider />

                <ScriptsList
                    filteredScripts={filterScripts(scripts, searchValue)}
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

export default hot(Sleek);
