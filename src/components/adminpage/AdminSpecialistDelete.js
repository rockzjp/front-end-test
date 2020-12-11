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
import EnhancedTable from '../ui/EnhancedTable'




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


function createData(name,position, phoneno, project,date,search ) {
    return {name, position, phoneno,project, date, search}
}


const AdminSpecialistDelete = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [rows, setRows] = useState([
        createData(
            "Tom", "Supervisor", "1231231234", "Xam123", "11/23/2020",true),
            createData(
                "Mike", "Supervisor", "3453453456", "Cad34","11/25/2020",true),
                createData(
                    "John", "Supervisor", "4565677890","BGH22","11/23/2020",true),
        ]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [name, setUsername] = useState("");
    const [position, setPosition] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [project, setProject] = useState("");
    const [date, setDate] = useState(new Date());
    const [search, setSearch] = useState("");
    



    const deleteSpecialist = () => {
        setRows([...rows, createData(
                                     name,
                                     position, 
                                     phoneno, 
                                     project,
                                     format(date, "MM/dd/yyyy"),
                                     true
                                     )])
        setDialogOpen(false)
        setUsername("")
        setPosition("")
        setPhoneno("")
        setProject("")
        setDate(new Date())
    }

    const handleSearch = event => {
        setSearch(event.target.value)

        const rowData = rows.map(row => Object.values(row).filter(option => option !== true && option !== false));
        const matches = rowData.map(row => row.map(option => 
            option.toLowerCase().includes(event.target.value.toLowerCase()) ));
        
        const newRows = [...rows];
        matches.map((row, index) => row.includes(true) ? 
        newRows[index].search = true : newRows[index].search = false);

        setRows(newRows);
       
        
       
            
        console.log(matches);   
       
    }

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="column">
            <Grid item style={{marginTop: "2em", marginLeft: "5em"}}>
                <Typography variant="h4" className={classes.headtypo}>
                    Specialist Delete
                </Typography>
            <Grid item>
                <TextField 
                   style={{width: "35em", marginLeft: "0.3em", marginTop: "2em"}}
                   placeholder="Delete Specialist"
                   value={search}
                   onChange={handleSearch}
                    />
            </Grid>

            <Grid item></Grid>
            </Grid>


            


            <Grid item style={{marginBottom: " 8em"}}>
             <EnhancedTable rows={rows} setRows={setRows} />
            </Grid>


             <Dialog fullWidth maxWidth="md" open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <Grid container justify="center" style={{marginTop: "2em", color: "#AE3034"}} >
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                          Delete a Specialist

                        </Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                <Grid container style={{marginLeft: "1em", marginBottom: "3em"}} justify="space-between">
                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="Username" id="name" value={name} onChange={(event) => setUsername(event.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="Position" id="position" value={position} onChange={(event) => setPosition(event.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="Project" id="project" value={project} onChange={(event) => setProject(event.target.value)} />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item>
                        <Grid item container direction="column" sm style={{marginTop: "5em"}}>
                            <Grid item>
                                <TextField label="Phone No." id="phoneno" value={phoneno} onChange={(event) => setPhoneno(event.target.value)} />
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
                           onClick={deleteSpecialist}
                           
                           >
                             - Delete Specialist -
                            </Button>
                    </Grid>
                </Grid>

                </DialogContent>
             </Dialog>
        </Grid>
        </MuiPickersUtilsProvider>
    )
}

export default AdminSpecialistDelete
