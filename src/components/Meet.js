import React from "react";

export default function MeetUs() {

    const styles = {
        carousel: {
            top: '50%',
            margin: '25%'
        }
    }

return (
    <div>
    <h1>Meet the Team</h1>

<div>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators" style={styles.carousel}>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
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
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."> */}
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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

{/* <p>Abdul</p>
<p>Isaak</p>
<p>Matt</p>
<p>Ryan</p>
<p>Sebastian</p> */}
</div>
)
}