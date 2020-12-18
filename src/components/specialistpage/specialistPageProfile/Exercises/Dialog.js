import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form'


export default class Create extends Component{
    
    state = {
        open: false,
        
    }
    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    
    handleFormSubmit = myinfo => { 
       this.handleToggle()

       this.props.onCreate(myinfo)
    }
  

    render() {
        const {open} = this.state,
        { myfile } = this.props
              
        
        return (
            <Fragment>
    
     
    
                    <Fab 
                     aria-label="add" 
                     size="small"
                     onClick={this.handleToggle}
                    >
                        <AddIcon />
                    </Fab>
    
               
    
                <Dialog open={open} onClose={this.handleToggle}>
                    <DialogTitle>
                        Create New
                    </DialogTitle>
    
                     <DialogContent>
                         <DialogContentText>
                            Please fill out below
                          </DialogContentText>
    
                       <Form 
                         myfile={myfile}
                         onSubmit={this.handleFormSubmit}
                       
                       />

                    </DialogContent>
    
                     
                </Dialog>
    
            </Fragment>
        )
    }
    
}




