import { hot } from 'react-hot-loader/root'

import React, { useState, useEffect } from 'react';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import SearchField from "./SearchField";
import ScriptsList from "./ScriptsList";
import ScriptRunner from "./ScriptRunner";
import css from './Sleek.pcss';
import API from "../api";


function Sleek(props) {
    let scripts = useAvailableScripts();
    let [searchValue, setSearchValue] = useState('');
    let [chosenScriptId, setChosenScriptId] = useState(null);

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
                    setChosenScriptId={setChosenScriptId}
                    chosenScriptId={chosenScriptId}
                />
            </Drawer>
            <ScriptRunner
                chosenScriptId={chosenScriptId}
            />
        </div>
    );
}


function useAvailableScripts() {
    let [scripts, setScripts] = useState([]);

    useEffect(() => {
        API.getAvailableScripts().then(response => setScripts(response.data));
    }, []);

    return scripts;
}


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


export default hot(Sleek);
