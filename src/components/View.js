import React, {Component} from 'react';
import MapView from "./MapView";
import Card from "./Card";
import seeRemImg from './Images/seeRemImg.jpg'


const View = props => {
    return(
        <div style= {{width: '90%', height: '90%', display: 'inline-block'}} >
            <div className='row' >
                <div className='col-sm-8' style= {{  margin: '40px', display: 'inline-block'}}>
                    <MapView/>
                </div>
                <div className='col-sm-2' style= {{ display: 'inline-block'}} >
                    <Card />
                </div>
                
            </div>
          
        </div>
    )
}

export default View;