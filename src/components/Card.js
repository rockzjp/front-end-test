import React from 'react';
import img1 from './Images/img1.JPEG'
import Time from './Time'
import Date from './Date'
const Card = props => {
    return(
      <div className='card-text-center' style={{width: "20rem", border: "solid #AE3034", borderRadius: '10px', margin: "40px", height: "550px",  backgroundColor:"#ffffff"  }} >
          <div style={{margin: "25px", alignItems:"center"   }}>
            <img src={img1} alt='seerem' /> <br/><br/><br/>
          
              <h3 className='card-title' style={{color: "#AE3034"}}>TIME:<br/><h4 style={{color: "#000000"}} ><Time /></h4></h3><br></br><br/>
              <h3 className='card-text'style={{color: "#AE3034"}} >DATE:<br/><h4 style={{color: "#000000"}} > <Date /> </h4></h3><br></br><br/><br/><br/><br/>
              
              <a className='btn btn-primary' href='/Chat' style={{ margin:"5px"}}>Enter Chat</a>
          
          </div>
        </div>
        
    )
}

export default Card;