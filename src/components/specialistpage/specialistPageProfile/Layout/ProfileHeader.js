import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Create from '../Exercises/Dialog'


const ProfileHeader = ({myfile, onMyinfoCreate}) => {
    return (

        <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" style={{flex: 1}}>
                Profile
            </Typography>

            <Create 
              myfile={myfile}
              onCreate={onMyinfoCreate}
              />
        </Toolbar>
      </AppBar>
    )
}

export default ProfileHeader
