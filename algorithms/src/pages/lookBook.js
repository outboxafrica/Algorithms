import React, {useState, useEffect} from 'react'
import User from '../components/user';

export default function LookBook() {
    const [loading, setloading] = useState(true)
    const [profile, setprofile] = useState(null)
  
    useEffect(()=>{
      const localData = localStorage.getItem('users')
        if(localData) { setprofile(JSON.parse(localData))}
    },[profile]);

    useEffect(()=>{
      getProfile();
    },[]);
  
   
    async function getProfile(){
      
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results[0]);
  
        setloading(false);
        setprofile(data.results[0]);
        
        localStorage.setItem('users', JSON.stringify(data.results[0])) 
        
    }

    return (
        <div>
            {loading || !profile ? (
              <div className="ui segment container" style={{width: "100px", overflow:"hidden", height:"70px"}}>
                <div className="ui active inverted dimmer">
                  <div className="ui text loader">Loading</div>
                </div>
              </div>
            ) 
            :(
              <User
            
                firstName = {profile.name.first}
                lastName = {profile.name.last}
                image = {profile.picture.large}
              />
              
          )}
        </div>
    )
}
