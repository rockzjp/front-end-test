import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const ProfileFooter = ({myfile, category, onSelect}) => {
   
    const index = category ? myfile.findIndex(group => group === category) + 1 : 0

    const onIndexSelect = (e, index) => 
        onSelect(index === 0 ? '' : myfile[index - 1])
    

    return (
        <Paper>
        <Tabs
          value={index}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={onIndexSelect}
        >
            <Tab label="All" />
            {myfile.map(group => 
             <Tab key={group} label={group} />
            )}
          
        </Tabs>
      </Paper>
    )
}

export default ProfileFooter
