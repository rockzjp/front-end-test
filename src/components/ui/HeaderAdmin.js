import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



/////////////////////////////
function ElevationScroll(props) {
    const { children} = props;   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
     
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
/////////////////////////////////////////

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")] : {marginBottom: "1.5em"},
        [theme.breakpoints.down("xs")] : {marginBottom: "1.5em"}
    },
    headtitle:{
        height: "1.5em",
        margin: "15px",
        [theme.breakpoints.down("md")] : {height: "1em"},
        [theme.breakpoints.down("xs")] : {height: "0.5em"}, 
        [theme.breakpoints.down("xs")] : {marginBottom: "0.8em"}
    },
    tabContainer: {
        marginLeft:"auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.exit,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "35px",
        
        
    },
    menu: {
        backgroundColor: theme.palette.common.red,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },

    drawerIconContainer: {
        marginLeft:"auto",
        "&:hover": {
            backgroundColor: "transparent"
        },
        
    },
    drawer: {
        backgroundColor: theme.palette.common.red
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    buttonDrawer: {
        ...theme.typography.exit,
        borderRadius: "50px",
        marginLeft: "30px",
        marginRight: "25px",
        height: "35px",
        
    },
    drawerItemSelected: {
        opacity:1
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
   
  
}))
  
/////////////////////////////////

const HeaderAdmin = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEL, setAnchorEL] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [open, setOpen] = React.useState(true);
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    const handleClick = (e) => {
        setAnchorEL(e.currentTarget)
        setOpenMenu(true)
    }
    const handleClickDrawer = () => {
        setOpen(!open);
      };
    const handleClose  = (e) => {
        setAnchorEL(null)
        setOpenMenu(false)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEL(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const menuSpecialistOptions = [{name: "Add", link: "/adminspecialistadd"},
                         {name: "Delete", link: "/adminspecialistdelete"},
                         {name: "Update", link: "/adminspecialistupdate"}];

    const menuLabourOptions = [{name: "Add", link: "/adminlabouradd"},
                               {name: "Delete", link: "/adminlabourdelete"},
                               {name: "Update", link: "/adminlabourupdate"}];

    const menuWorksiteOptions = [{name: "Add", link: "/adminworksiteadd"},
                                 {name: "Delete", link: "/adminworksitedelete"},
                                 {name: "Map", link: "/View"}];


    useEffect(() => {
        if(window.location.pathname === "/specialist" && value !== 0){
            setValue(0)
        } 
        else if (window.location.pathname === "/labour" && value !== 1){
            setValue(1) } 
        else if (window.location.pathname === "/worksite" && value !== 2){
                setValue(2) } 

        switch (window.location.pathname) {
            case "/specialist":
                if(value !== 0) {
                    setValue(0);
                }
                break;
            case "/adminspecialistadd":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                } 
                break;
            case "/adminspecialistdelete":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/adminspecialistupdate":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case "/labour":
                if(value !== 1) {
                    setValue(1);
                    
                }
                break;
            case "/adminlabouradd":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                }
                break;
            case "/adminlabourdelete":
                if(value !== 1) {
                   setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/adminlabourupdate":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case "/worksite":
                if(value !== 2) {
                    setValue(2);
                    
                }
                break;
            case "/adminworksiteadd":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                }
                break;
            case "/adminworksitedelete":
                if(value !== 1) {
                   setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/adminworksitemap":
                if(value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            
            default: break;
        }
    }, [value]); 
   

    const tabs = (
        <React.Fragment>
                <Tabs
                              value={value} 
                              onChange={handleChange} 
                              className={classes.tabContainer}
                              indicatorColor="primary"
                            >
                                <Tab
                                aria-owns={anchorEL ? "simple-menu" : undefined}
                                aria-haspopup={anchorEL ? "true" : undefined}
                                onMouseOver={event => handleClick(event)}
                                className={classes.tab} label="Specialist"  />


                                <Tab 
                                 aria-owns={anchorEL ? "simple-labour" : undefined}
                                 aria-haspopup={anchorEL ? "true" : undefined}
                                 onMouseOver={event => handleClick(event)}
                                 className={classes.tab} label="Labour" />


                                <Tab 
                                 aria-owns={anchorEL ? "simple-worksite" : undefined}
                                 aria-haspopup={anchorEL ? "true" : undefined}
                                 onMouseOver={event => handleClick(event)}
                                 className={classes.tab} label="WorkSite" />
                                
                            </Tabs>
                            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/">
                                Exit
                            </Button>


                            <Menu 
                               id="simple-menu" 
                               anchorEl={anchorEL} 
                               open={openMenu} 
                               classes={{paper: classes.menu}}
                               onClose={handleClose}
                               MenuListProps={{onMouseLeave: handleClose}}
                               elevation={0}
                               keepMounted
                            >
                              {menuSpecialistOptions.map((option1, i) => (
                                  <MenuItem key={option1} component={Link} to={option1.link}
                                   classes={{root: classes.menuItem}}
                                   onClick={(event) => {
                                       handleMenuItemClick(event, i);
                                       setValue(0);
                                       handleClose()
                                   }}
                                   selected={i === selectedIndex && value === 1}>
                                    {option1.name}
                                  </MenuItem>
                              ))}
                            </Menu>



                            <Menu 
                               id="simple-labour" 
                               anchorEl={anchorEL} 
                               open={openMenu} 
                               classes={{paper: classes.menu}}
                               onClose={handleClose}
                               MenuListProps={{onMouseLeave: handleClose}}
                               elevation={0}
                               keepMounted
                            >
                              {menuLabourOptions.map((option2, i) => (
                                  <MenuItem key={option2} component={Link} to={option2.link}
                                   classes={{root: classes.menuItem}}
                                   onClick={(event) => {
                                       handleMenuItemClick(event, i);
                                       setValue(1);
                                       handleClose()
                                   }}
                                   selected={i === selectedIndex && value === 1}>
                                    {option2.name}
                                  </MenuItem>
                              ))}
                            </Menu>



                            <Menu 
                               id="simple-worksite" 
                               anchorEl={anchorEL} 
                               open={openMenu} 
                               classes={{paper: classes.menu}}
                               onClose={handleClose}
                               MenuListProps={{onMouseLeave: handleClose}}
                               elevation={0}
                               keepMounted
                            >
                               {menuWorksiteOptions.map((option, i) => (
                                  <MenuItem key={option} component={Link} to={option.link}
                                   classes={{root: classes.menuItem}}
                                   onClick={(event) => {
                                       handleMenuItemClick(event, i);
                                       setValue(2);
                                       handleClose()
                                   }}
                                   selected={i === selectedIndex && value === 1}>
                                    {option.name}
                                  </MenuItem>
                              ))}
                            </Menu>
        </React.Fragment>
    )
    
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
               disableBackdropTransition={!iOS} 
               disableDiscovery={iOS} 
               open={openDrawer}
               onClose={() => setOpenDrawer(false)}
               onOpen={() => setOpenDrawer(true)}
               classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin} /> 
                <List disablePadding>
                       <ListItem 
                              divider button 
                              selected={value === 0}
                              classes={{selected: classes.drawerItemSelected}}
                              onClick={handleClickDrawer}
                              >
                        <ListItemText
                          className={classes.drawerItem}
                          
                          disableTypography primary="Specialist" />
                          
                          {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>

                          
                          <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItem button className={classes.nested} component={Link} to="/adminspecialistadd">
                                    <ListItemText primary="Add" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/adminspecialistdelete">
                                    <ListItemText primary="Delete" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/adminspecialistupdate">
                                    <ListItemText primary="Update" />
                                </ListItem>
                                </List>
                         </Collapse>
                            
                        

                   

                         <ListItem 
                              divider button 
                              selected={value === 0}
                              classes={{selected: classes.drawerItemSelected}}
                              onClick={handleClickDrawer}
                              >
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography primary="Labour" />
                          
                          {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>

                          
                          <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItem button className={classes.nested} component={Link} to="/adminlabouradd">
                                    <ListItemText primary="Add" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/adminlabourdelete">
                                    <ListItemText primary="Delete" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/adminlabourupdate">
                                    <ListItemText primary="Update" />
                                </ListItem>
                                </List>
                         </Collapse>




                         <ListItem 
                              divider button 
                              selected={value === 0}
                              classes={{selected: classes.drawerItemSelected}}
                              onClick={handleClickDrawer}
                              >
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography primary="WorkSite"  />
                          
                          {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>

                          
                          <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                <ListItem button className={classes.nested} component={Link} to="/adminworksiteadd">
                                    <ListItemText primary="Add" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/adminworksitedelete">
                                    <ListItemText primary="Delete" />
                                </ListItem>
                                <ListItem button className={classes.nested} component={Link} to="/View">
                                    <ListItemText primary="Map" />
                                </ListItem>
                                </List>
                         </Collapse>




                    <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/">
                    <Button variant="contained" color="secondary" className={classes.buttonDrawer} component={Link} to="/">
                                Exit
                            </Button>

                    </ListItem>
                </List>
            </SwipeableDrawer>

            <IconButton
               onClick={() => setOpenDrawer(!openDrawer)} 
               className={classes.drawerIconContainer}
               disableRipple
            >
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
                <ElevationScroll>
                    <AppBar position="fixed" color="primary" className={classes.appBar}>
                        <Toolbar>
                            <Button 
                              component={Link} 
                              to="/" 
                              onClick={() => setValue(0)}
                              disableRipple
                            >
                                <Typography variant="h4" color="secondary" className={classes.headtitle}>
                                    SEEREM
                                </Typography>
                            </Button>
                            
                                {matches ? drawer : tabs}

                        </Toolbar>
                    </AppBar>
               </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
        
        
    )
}

export default HeaderAdmin
