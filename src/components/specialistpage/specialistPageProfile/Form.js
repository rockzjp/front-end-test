import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Form extends Component {
   state = {
        profilecontentinside: {
        titile: '',
        profilecontenthead:''
        }
   }

  

   handleChange = name => ({target: {value}}) => {
    this.setState({
            [name]: value
        })
}

handleSubmit = () => {
    const {profilecontentinsideeach} = this.state

    this.props.onSubmit({
        ...profilecontentinsideeach,
        id: profilecontentinsideeach.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
        open: false,
        profilecontentinsideeach: {
            title: '',
            profilecontenthead: ''
        }
    })
}
  
    render() {
        const {title, profilecontenthead} = this.state,
              {profilecontenthead: categories} = this.props
        return (
            <form>
                <TextField 
                            
                   label="content"
                   value={title}
                   onChange={this.handleChange('title')}
                   margin="normal" />

                <br />

                <FormControl style={{width: 180}}>
                    <InputLabel htmlFor="profilecontenthead">Profile</InputLabel>
                        <Select
                        value={profilecontenthead}
                        onChange={this.handleChange('profilecontenthead')}
                        >

                        {categories.map(category => 
                            <MenuItem value={category} key={category}>{category}</MenuItem>
                            )}


                        </Select>
                </FormControl>
                         <Button  
                          color="primary"
                          onClick={this.handleSubmit}
                          >
                            Create
                        </Button>
            </form>
        )
    }
}
