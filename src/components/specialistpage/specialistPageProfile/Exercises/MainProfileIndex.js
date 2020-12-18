import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Form from './Form'



const MyProfile = ({
                     myfile,
                     myinfos, 
                     category, 
                     onSelect, 
                     editMode,
                     myinfo,
                     myinfo: {
                                 id,
                                 title = "Welcome", 
                                 description = "Please select a info from the list on the left"
                                },
                    onDelete,
                    onSelectEdit,
                    onEdit

}) => {
    return (

        <Grid container>

            <Grid item sm>
                <Paper style={{ padding: 20, marginTop: 10, marginBottome: 10, overflowY: 'auto'}}>
                    {myinfos.map(([group, myinfos]) => 
                    
                      !category || category === group
                       ? <Fragment key={group}>

                           <Typography 
                             variant="h5"
                             style={{textTransform: "capitalize"}}
                           >
                             {group}
                           </Typography>
 
                           <List component="ul">
                              {myinfos.map(({id, title}) => 

                              <ListItem 
                                key={id}
                                button
                                onClick={() => onSelect(id)} 
                              >

                              <ListItemText primary={title} />
                                 <ListItemSecondaryAction>
                                 <IconButton onClick={() => onSelectEdit(id)}>
                                       <EditIcon />
                                   </IconButton>
                                   <IconButton onClick={() => onDelete(id)}>
                                       <DeleteIcon />
                                   </IconButton>
                                 </ListItemSecondaryAction>
                             </ListItem>
                             )}

                           </List>

                          </Fragment>
                       : null
                      
                    )}
                </Paper>
            </Grid>

            <Grid item sm>
                <Paper style={{padding: 20, marginTop: 10, marginBottome: 10}}>
                    {editMode
                     ? <Form
                        myinfo={myinfo} 
                        myfile={myfile}
                        onSubmit={onEdit}
                       />
                     : <Fragment>
                        <Typography variant="h4">
                          {title}
                        </Typography>

                        <Typography variant="body1" style={{marginTop: 20}}>
                         {description}
                        </Typography>

                     </Fragment>
                    }
                    
                </Paper>
            </Grid>

        </Grid>
    )
}

export default MyProfile
