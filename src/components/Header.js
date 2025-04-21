import React from "react";

export default function Header() {

    const styles = {
        imageStyle: {
            width: '25%',
            borderRadius: 30,
          }      
    }

return (

<nav class="navbar sticky-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img style={styles.imageStyle} src={require('/users/isaak/Desktop/Home-Projects/Website/src/images/Logo.jpg')} class="img-thumbnail" alt="Pub Logo"></img>
        Pub
        </a>
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Meet the Team</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact Us</a>
  </li>
</ul>
  </div>
</nav>

)
}