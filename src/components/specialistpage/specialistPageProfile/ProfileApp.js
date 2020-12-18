import React, {Component, Fragment}from 'react'
import {ProfileHeader, ProfileFooter} from './Layout/ProfileIndex'
import MyProfile from './Exercises/MainProfileIndex'
import {myfile, myinfos} from './store'



export default class ProfileApp extends Component {
    state = {
        myinfos,
        myinfo: {},
    }


    getMyinfosByMyfile() {
        const initMyinfos = myfile.reduce((myinfos, category) => ({
                ...myinfos,
                [category]: []
        }), {})

        return Object.entries(
            this.state.myinfos.reduce((myinfos, myinfo) => {
              const {myfile} = myinfo

              myinfos[myfile] =  [...myinfos[myfile], myinfo]
              

              return myinfos
            }, initMyinfos)
        )
    }

    handleCategorySelect = category => {
        this.setState({
            category
        })
    }

    handleMyinfoSelet = id =>{
        this.setState(({myinfos}) => ({
            myinfo: myinfos.find(info => info.id === id),
            editMode: false
        }))
    }

    handleMyinfoCreate = myinfo => {
        this.setState(({myinfos }) => ({
            myinfos: [
                ...myinfos,
                myinfo
            ]
        }))
    }

    handleMyinfoDelete = id => {
        this.setState(({myinfos}) => ({
            myinfos: myinfos.filter( info => info.id !== id),
            editMode: false,
            exercise: {}

        }))
    }

    handleMyinfoSelectEdit = id => {
        this.setState(({myinfos}) => ({
            myinfo: myinfos.find(info => info.id === id),
            editMode: true
        }))
       
    }

    handleMyinfoEdit = myinfo => {
        this.setState(({myinfos}) => ({
            myinfos: [
                ...myinfos.filter(info => info.id !== myinfo.id),
                myinfo
            ],
            myinfo
        }))
    }

    render() {
        const myinfos = this.getMyinfosByMyfile(),
          {category, myinfo, editMode} = this.state
        return (
            <Fragment>

                <ProfileHeader 
                  myfile={myfile}
                  onMyinfoCreate={this.handleMyinfoCreate}
                />


                <MyProfile
                  myinfo={myinfo}
                  category={category}
                  myinfos={myinfos}
                  editMode={editMode}
                  myfile={myfile}
                  onSelect={this.handleMyinfoSelet}
                  onDelete={this.handleMyinfoDelete}
                  onSelectEdit={this.handleMyinfoSelectEdit}
                  onEdit={this.handleMyinfoEdit}
                
                />



                <ProfileFooter 
                  category={category}
                  myfile={myfile}
                  onSelect={this.handleCategorySelect}
                />
            </Fragment>
        )
    }
    
}

