import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const SpecialistProfileFooter = ({profilecontenthead, category, onSelect}) => {
    const index = category ? profilecontenthead.findIndex(group => group === category) + 1 : 0

    return ( 
        <Paper >
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={(e,index) => onSelect(index === 0 ? '' : profilecontenthead[index - 1])}
               
            >
                <Tab label="All" />
                {profilecontenthead.map(group => 
                    <Tab key={group} label={group} />
                    
                )}
                
                
            </Tabs>
            </Paper>
    )
}

export default SpecialistProfileFooter