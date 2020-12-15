import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Create from './Dialogs/Create'


 const SpecialistPageProfileHead = ({profilecontenthead, onProfilecontentinsideeachCreate}) => {
    return (
        <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" style={{flex: 1}}>
                Specialist Profile
          </Typography>

          <Create 
             profilecontenthead={profilecontenthead}
             onCreate={onProfilecontentinsideeachCreate}
             />
        </Toolbar>
      </AppBar>
    )
}

export default SpecialistPageProfileHead