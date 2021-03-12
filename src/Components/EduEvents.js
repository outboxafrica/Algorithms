import React from 'react'
import Events from "./Events";
import '../style/EduEvents.css'

function EduEvents() {
    return (
        <div className='our-events'>
            <h1>EDU Events</h1>
             <div className="edu-events">
                    
      
      <Events
        id="1234"
        title="Software Development"
       
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />

      <Events
        id="123477"
        title="Carrier Guidance"
       
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />

      <Events
        id="123488"
        title="Front-end Development"
        
        image="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
   

            
        </div>
        </div>
    )
}

export default EduEvents
