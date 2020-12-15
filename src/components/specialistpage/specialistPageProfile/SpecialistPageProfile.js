import React, {Component, Fragment} from 'react'
import SpecialistProfile from './SpecialistProfile'
import SpecialistProfileFooter from './SpecialistProfileFooter'
import {profilecontenthead, profilecontentinside} from './store'
import SpecialistPageProfileHead from './SpecialistPageProfileHead'




export default class SpecialistPageProfile extends Component {
    state = {
        profilecontentinside,
        profilecontentinsideeach: {},
        
         
    };

    getSpecialistProfileByProfilecontenthead () {
        const initProfilecontentinside = profilecontenthead.reduce((profilecontentinside, category) => ({
              ...profilecontentinside,
              [category]: []

        }), {})
        return Object.entries( this.state.profilecontentinside.reduce((profilecontentinside, profilecontentinsideeach) => {
                const {profilecontenthead} = profilecontentinsideeach
                profilecontentinside[profilecontenthead] =  [...profilecontentinside[profilecontenthead], profilecontentinsideeach]

                return profilecontentinside
        }, initProfilecontentinside)
        )
    }

    handleCategorySelected = category => {
        this.setState({ 
            category
        })
    }

    handleProfilecontentinsideSelected = id => {
        this.setState(({profilecontentinside}) => ({
            profilecontentinsideeach: profilecontentinside.find(ea => ea.id === id)
        }))
    }

    handleProfilecontentinsideeachCreate = profilecontentinsideeach => {
        this.setState(({profilecontentinside}) => ({
            profilecontentinside: [
                ...profilecontentinside,
                profilecontentinsideeach
            ]
        }))
    }

    handleProfilecontentinsideeachDelete = id => {
        this.setState(({profilecontentinside}) => ({
                profilecontentinside: profilecontentinside.filter( ex => ex.id !==id)
        }))
    }

    handleProfilecontentinsideEdit = id => 

        this.setState(({profilecontentinside}) => ({
            profilecontentinsideeach: profilecontentinside.find(ea => ea.id === id),
            editMode: true
        }))
    
    handleProfilecontentinsideeachEdit = profilecontentinsideeach => {
        this.setState((profilecontentinside) => ({
                profilecontentinside: [
                    ...profilecontentinside.filter(ex => ex.id !== profilecontentinsideeach.id),
                    profilecontentinsideeach
                ]
        }))
    }
    

    render() {
        const profilecontentinside = this.getSpecialistProfileByProfilecontenthead(),
         {category, profilecontentinsideeach, editMode} = this.state

        return (
            <Fragment>
                <SpecialistPageProfileHead 
                   profilecontenthead={profilecontenthead}
                   onProfilecontentinsideeachCreate={this.handleProfilecontentinsideeachCreate}
                />

                <SpecialistProfile 
                  profilecontentinsideeach = {profilecontentinsideeach}
                  category={category}
                  profilecontentinside={profilecontentinside}
                  onSelect={this.handleProfilecontentinsideSelected}
                  onDelete={this.handleProfilecontentinsideeachDelete}
                  onSelectEdit={this.handleProfilecontentinsideEdit}
                  editMode={editMode}
                  profilecontenthead= {profilecontenthead}
                  onEdit={this.handleProfilecontentinsideeachEdit}
                />

                <SpecialistProfileFooter 
                 category={category}
                 profilecontenthead={profilecontenthead}
                 onSelect={this.handleCategorySelected}
                />
            </Fragment>
        )
    }
}
