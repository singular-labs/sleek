import { hot } from 'react-hot-loader/root'

import React, { useState, useEffect } from 'react';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import SearchField from "./SearchField";
import ScriptsList from "./ScriptsList";
import ScriptRunner from "./ScriptRunner";
import css from './Sleek.pcss';
import {call} from "redux-saga/effects";
import API from "../api";


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

    let [scripts, setScripts] = useState([]);
    let [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        API.getAvailableScripts().then(response => setScripts(response.data));
    }, [])

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
