import React from 'react';

import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


class Sleek extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    position="fixed"
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Show scripts"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Sleek
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <div>
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>

                    <Divider />
                </Drawer>
            </div>
        );
    }
}

export default Sleek;
