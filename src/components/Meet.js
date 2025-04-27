import React from "react";

export default function MeetUs() {

    const styles = {
        carousel: {
            margin: '25%',     
        }
        
    }

return (
    <div>
    <h1>Meet the Team</h1>

<div style={styles.carousel}>
    <div id="carouselExampleCaptions" class="carousel slide," >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active text-bg-dark p-3" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner,">
    <div class="carousel-item active">
      <img src={require('../images/luckycharms.jpg')} class="d-block w-100" alt="Matt"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Matt</h5>
        <p>With a deep Irish heritage, Matt has a love and passion for Irish culture and serving the community.
            You can find him behind the bar pouring a proper pint of Guinness</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={require('../images/robert.jpg')} class="d-block w-100" alt="Abdul"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Abdul</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/Moe.jpg')} class="d-block w-100" alt="Sebastion"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Sebastion</h5>
        <p>Bartender</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/frank.jpg')} class="d-block w-100" alt="Ryan"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Ryan</h5>
        <h6>Server</h6>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/spongebob.jpg')} class="d-block w-100" alt="Ryan"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Isaak</h5>
        <h6>Cook</h6>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
)
}