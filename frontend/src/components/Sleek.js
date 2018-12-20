import React from 'react';

import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


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
            </div>
        );
    }
}

export default Sleek;
