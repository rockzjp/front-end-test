import React, { Component,Fragment } from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { profilecontentinside } from '../store';
import Form from '../Form'




export default class Create extends Component{
    state = {
        open: false,
       
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {open} = this.state,
        {profilecontenthead, onCreate} = this.props
             

        return (
            <Fragment>
                    
                    <Fab color="primary" aria-label="add" size="small" onClick={this.handleToggle}>
                        <AddIcon />
                    </Fab>
                    
                    <Dialog open={open} onClose={this.handleToggle}>
                     <DialogTitle id="form-dialog-title">Create</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Please fill out the form below
                        </DialogContentText>

                          <Form 
                           profilecontenthead={profilecontenthead}
                           onSubmit={onCreate}
                          />

                        </DialogContent>
                     
                    </Dialog>
            </Fragment>
                
            
        )
    }
    
}


