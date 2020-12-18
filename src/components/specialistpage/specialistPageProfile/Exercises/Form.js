import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';



export default class Form extends Component {
    state = this.getInitState()

    getInitState() {
        const { myinfo } = this.props
        return myinfo ? myinfo: {
            title: '',
            description: '',
            myfile: ''
        }
    }
    
    componentWillReceiveProps({myinfo}) {
        this.setState({
            ...myinfo
        })
    }

    handleChange = name => ({target: {value}}) => {
        this.setState({
           [name]: value
        })
    }

    handleSubmit = () => {
        
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state,
            
        })
        this.setState(this.getInitState())
    }

    

    render() {
        const  {title,description, myfile} = this.state,
                      {myinfo, myfile: categories} = this.props 
        return (
                     <form>
                            <TextField  
                              label="Title" 
                              value={title}
                              onChange={this.handleChange('title')}
                            />
                             <br />
                            <FormControl style={{width: 175}}>
                                <InputLabel htmlFor="myfile">My file</InputLabel>
                                    <Select
                                     value={myfile}
                                     onChange={this.handleChange('myfile')}
                                    >
                                    {categories.map(category => 
                                        <MenuItem key={category} value={category}>{category}</MenuItem>
                                    )}
                                    </Select>
                             </FormControl>

                            <br />
                            <TextField
                              multiline
                              rows="4"  
                              label="Description" 
                              value={description}
                              onChange={this.handleChange('description')}
                            />
                            <br />
                            <Button 
                             color="primary" 
                             onClick={this.handleSubmit}
                            >
                              {myinfo ? 'Edit' : 'Create'}
                            </Button>
                        </form>
        )
    }
}