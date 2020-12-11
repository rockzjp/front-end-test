import React, {useState}from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdorment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {format} from 'date-fns';




const useStyles = makeStyles(theme => ({
   headtypo: {
    color: "#AE3034"
   },
   tablehead: {
       fontSize: "1em",
       color: "#AE3034",
       borderColor: "AE3034"
   },
   button: {
       color: "#fff",
       backgroundColor: "#AE3034",
       borderRadius: 50,
       textTransform: "none",
       "&:hover": {
           backgroundColor: "#F5F5F5"
       }
   }
   
   
}))


function createData(project,location,information,date ) {
    return {project,location,information, date}
}


const AdminWorksiteAdd = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [rows, setRows] = useState([
        createData(
            "SH23", "ontario toront", "need many workers and 4 supervisor"),
            createData(
                "SH23", "ontario toront", "need many workers and 4 supervisor"),
                createData(
                    "SH23", "ontario toront", "need many workers and 4 supervisor"),
        ]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [project, setProject] = useState("");
    const [location, setLocation] = useState("");
    const [information, setInformation] = useState("");
    const [date, setDate] = useState(new Date());
    



    const addWorksite = () => {
        setRows([...rows, createData(
                                     project,
                                     location, 
                                     information, 
                                     format(date, "MM/dd/yyyy")
                                     
                                     )])
        setDialogOpen(false)
        setProject("")
        setLocation("")
        setInformation("")
        setDate(new Date())
    }



    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="column">
            <Grid item style={{marginTop: "2em", marginLeft: "5em"}}>
                <Typography variant="h4" className={classes.headtypo}>
                    Work Site Add
                </Typography>
            <Grid item>
                <TextField 
                   style={{width: "35em", marginLeft: "5em", marginTop: "2em"}}
                   placeholder="Add Work Site"
                   InputProps={{endAdornment: <InputAdorment 
                                                position="end" onClick={() => setDialogOpen(true)}
                                                style={{cursor: "pointer"}} 
                                               > 
                
                <AddCircleIcon color="primary" style={{fontSize: 30}}/> 
                
                </InputAdorment>}} />
            </Grid>

            <Grid item></Grid>
            </Grid>


            <Grid item container justify="flex-end" style={{marginTop: "5em"}}>
                <Grid item style={{marginRight: 50}}>
                    <FilterListIcon color="primary" style={{fontSize: 35}}/>
                </Grid>
            </Grid>


            <Grid item style={{marginBottom: " 8em"}}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tablehead}>
                                    Project ID
                                </TableCell>

                                <TableCell className={classes.tablehead}>
                                    Location
                                </TableCell>

                                <TableCell className={classes.tablehead}>
                                   Information
                                </TableCell>

                                
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row, index) => <TableRow key={index}>
                            <TableCell>{row.project}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>{row.information}</TableCell>
                        </TableRow>)}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Grid>


             <Dialog fullWidth maxWidth="md" open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <Grid container justify="center" style={{marginTop: "2em", color: "#AE3034"}} >
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                          Add a Work Site

                        </Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                <Grid container style={{marginLeft: "1em", marginBottom: "3em"}} justify="space-between">
                    <Grid item>

                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="project" id="project" value={project} onChange={(event) => setProject(event.target.value)} />
                            </Grid>
                        </Grid>

                    </Grid>
                    
                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="Location" id="location" value={location} onChange={(event) => setLocation(event.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="Information" id="information" value={information} onChange={(event) => setInformation(event.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    

                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "6em"}}>
                            <Grid item>
                                <KeyboardDatePicker format="MM/dd/yyyy" value={date} onChange={newDate => setDate(newDate)} />
                            </Grid>
                        </Grid>
                    </Grid>

                    


                    

                    


                </Grid>
                <Grid container justify="center" style={{marginTop: "3em"}}>
                    <Grid item>
                        <Button 
                          container="primary"
                          onClick={() => setDialogOpen(false)}
                        >
                            Cancel</Button>
                    </Grid>

                    <Grid item>
                        <Button 
                           variant="contained" 
                           className={classes.button}
                           onClick={addWorksite}
                           
                           >
                             - Add WorkSite -
                            </Button>
                    </Grid>
                </Grid>

                </DialogContent>
             </Dialog>
        </Grid>
        </MuiPickersUtilsProvider>
    )
}

export default AdminWorksiteAdd
