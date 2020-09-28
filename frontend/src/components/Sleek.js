import { hot } from 'react-hot-loader/root'

import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import SearchField from "./SearchField";
import ScriptsList from "./ScriptsList";
import ScriptRunner from "./ScriptRunner";
import css from './Sleek.pcss';
import API from "../api";
import clsx from "clsx";


function Sleek(props) {
    let scripts = useAvailableScripts();
    let [searchValue, setSearchValue] = useState('');
    let [chosenScriptId, setChosenScriptId] = useState(null);
    let [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <div className={css.mainDiv}>
            <AppBar
                position="fixed"
                className={css.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open/close drawer"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Sleek
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={css.drawer}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={{
                    paper: css.drawerPaper
                }}
            >
                <Toolbar/>          {/* Added only to make sure the content is below the toolbar */}
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
            <div className={clsx(css.runnerContainer, drawerOpen && css.runnerContainerShift)}>
                <ScriptRunner
                    chosenScriptId={chosenScriptId}
                />
            </div>
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
