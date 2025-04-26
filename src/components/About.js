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

return (<div className="container">
     <img src={require('../images/background.jpg')} className="img-fluid d-block w-100" alt="Pub"></img>
     <img src={require('../images/Logo.jpg')} class="d-block w-100" alt="Pub"></img>   
</div>


)
}