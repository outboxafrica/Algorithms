import React from 'react'

const User = (props)=>{
    return(
        <div className="user-info">
            <div>{props.title} {props.firstName} {props.lastName}</div>
          

            <img src={props.image} alt= "pass"  className="user-image"/>
        </div>
    )
}

export default User;