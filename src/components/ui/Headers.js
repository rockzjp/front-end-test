import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

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
        marginBottom: "3em"
    },
    headtitle:{
        height: "1.5em",
        margin: "15px"
    },
    tabContainer: {
        marginLeft:"auto"
    },
    tab: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: ".9rem"
    }
  
}))
  
/////////////////////////////////

const Headers = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    useEffect(() => {
        if(window.location.pathname === "/" && value !== 0){
            setValue(0)
        } 
        else if (window.location.pathname === "/admin" && value !== 1){
            setValue(1) } 
        else if (window.location.pathname === "/specialist" && value !== 2){
                setValue(2) } 
        else if (window.location.pathname === "/labour" && value !== 3){
                    setValue(3) }
    }, [value]); 


    return (
        <React.Fragment>
                <ElevationScroll>
                    <AppBar position="fixed" color="primary">
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
                            <Tabs
                              value={value} 
                              onChange={handleChange} 
                              className={classes.tabContainer}
                              indicatorColor="primary"
                            >

                                <Tab className={classes.tab} label="Log Out" icon={<ExitToAppIcon />} component={Link} to="/" />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
               </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
        
        
    )
}

export default Headers
