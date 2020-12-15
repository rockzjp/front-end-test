import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { IconButton, ListItemSecondaryAction, Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form'



const SpecialistProfile = ({
                             
                             profilecontentinside, 
                             category, 
                             onSelect, 
                             profilecontentinsideeach: {id, title="Select"}, 
                             profilecontenthead, 
                             onDelete,
                             onSelectEdit,
                             editMode,
                             onEdit
                            
                           }) => {
    return (
        <Grid container> 
            <Grid item sm>
                <Paper style={{padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflow: 'auto'}}>
                    {profilecontentinside.map(([group, profilecontentinside]) => 
                    !category || category === group
                      ? <Fragment key={group}>
                            <Typography
                                variant="h5"
                                style={{textTransform: "capitalize"}}
                            >
                                {group}
                            </Typography>
                               <List component="ul">
                                   {profilecontentinside.map(({id,title}) => 
                                        <ListItem
                                          key={id} 
                                          button
                                          onClick={() => onSelect(id)}
                                        >
                                        <ListItemText 
                                           primary={title} 
                                        />
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
                <Paper style={{padding: 20, marginTop: 10, marginBottom: 10}}>

                    {editMode 
                     ? <Form 
                        
                        profilecontenthead={profilecontenthead}
                        onSubmit={onEdit}
                     
                       />
                     : <Fragment>

                         <Typography
                          variant="h3"
                         >
                          {title}
                         </Typography>
                        
                        <Typography
                          variant="subtitle1"
                          style={{marginTop: 20}}
                     
                        >
                            area
                        </Typography>
                        </Fragment>
                    }
                    
                    
                </Paper>
            </Grid>



        </Grid>
    )
}

export default SpecialistProfile







