import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const styles = {
        imageStyle: {
            width: '25%',
            borderRadius: 30,
                    }
    }

return (

<nav class="navbar sticky-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand"  href="/About">
    <img style={styles.imageStyle} src={require('../images/Logo.jpg')} alt="Pub Logo" ></img>
        <span className="navTxt">Pub</span>
        </a>
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/About" component={Link} to='/About' value="About">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link"  component={Link} to='/Menu' value="Menu" href="/Menu">Food Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" component={Link} to='/Drinks' value="Drinks" href="/Drinks">Drinks Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" component={Link} to='/MeetUs' value="MeetUs" href="MeetUs">Staff Bios</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" component={Link} to='/Contact' value="Contact" href="Contact">Contact Us</a>
  </li>
</ul>
  </div>
</nav>

)
}