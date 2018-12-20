import React from 'react';

import classNames from 'classnames';

import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from '@material-ui/core/Divider';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
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
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});




class Sleek extends React.Component {
    render() {
        const { classes, theme, isSideMenuOpen } = this.props;

        return (
            <div>
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: isSideMenuOpen
                    })}
                >
                    <Toolbar disableGutters={!isSideMenuOpen}>
                        <IconButton
                            color="inherit"
                            aria-label="Show scripts"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                        >
                            Sleek
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={isSideMenuOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div
                        className={classes.drawerHeader}
                    >
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

export default withStyles(styles, { withTheme: true })(Sleek);
