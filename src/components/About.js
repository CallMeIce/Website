import React from "react";
import './style.css'

export default function About() {

    // const styles = {
    //     picture: {
    //         // justifyContent: 'center',    
    //     },    
    //         logo: {
    //             margin: '5%',

    //     }
    
    // }

return (
<div className="container">
    <div>
        <br></br>
        <br></br>
        <div > 
            <h3  class="list-group-item list-group-item-success rounded"> <span className="textHours"> Located near the East Village.
            Pub is a well-known pub where you can relax, unwind, and enjoy making some
            new memories!</span> </h3>
            </div>   
     </div>
        <br></br>
        <br></br>
     <div >
        <span>
     <img  src={require('../images/cheers.gif')} class="min-vw-50" alt="Cheers"></img>
</span>
            </div>
            <br></br>
            <div>
                <h3 class="list-group-item list-group-item-success rounded"> <span className="textHours" >Laughter, Memories, and Good Company!</span></h3>
            </div>
            <br></br>
            <div>
            <img  src={require('../images/Logo.jpg')} class="rounded-3" alt="Logo"></img>
            
            </div>
            <br></br>
            <br></br>
            <h3 class="list-group-item list-group-item-success rounded d-inline-block"> <span className="textHours">Interested in renting out Pub for an event or gathering? <a href="/Contact">Contact us</a> for more information!</span></h3>
            <br></br>
            <br></br>
</div>


)
}