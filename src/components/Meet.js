import React from "react";
import "./style.css";

export default function MeetUs() {

  return (
    <div className="container">
    <h1 className="textMeet">Meet the Team</h1>

<div>
    <div id="carouselExampleCaptions" class="carousel slide," >
  <div className="carousel" class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner,">
    <div class="carousel-item active">
      <img src={require('../images/luckycharms.jpg')}  height={600} class="d-block w-100" alt="Matt"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="textMeet">Matt</h5>
        <p className="textMeet">With a deep Irish heritage, Matt has a love and passion for Irish culture and serving the community.
            You can find him behind the bar pouring a proper pint of Guinness</p>
      </div>
    </div>
    <div className="staffPics" class="carousel-item">
      <img  src={require('../images/robert.jpg')} height={600} class="d-block w-100" alt="Abdul"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="textMeet" style={{ color: 'black' }}>Abdul</h5>
        <p className="textMeet">Abdul Rashedy takes the helm of Pub, blending bold expertise with warm hospitality. 
          With his signature tough love, he welcomes guests to a lively space filled with rich stews, perfectly
           poured pints, and hearty laughter, ensuring every dish and experience captures the soul of Ireland</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/waluigi.jpg')} height={600} class="d-block w-100" alt="Sebastion"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Sebastion</h5>
        <p>with years spent perfecting my craft, traveling across the world and acquainting myself with 
          the art of a fine drink. The Pub allows for my expertise to shine in an environment filled
           with laughs, joy, and a good time for a drink on any given day. 
        </p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/frank.jpg')} height={600} class="d-block w-100" alt="Ryan"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Ryan</h5>
        <h6>Serving with a smile and recommending his favorite drinks and dishes, Ryan
          helps to keep Pub a pleasant experience.
        </h6>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/spongebob.jpg')} height={600} class="d-block w-100" alt="Ryan"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Isaak</h5>
        <h6>With years of flipping patties, it was time for a change. Working at Pub exposed me to make new creations
          rather than just making a Krabby Patty everyday.
        </h6>
      </div>
    </div>
  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carouselButtons" class="carousel-control-prev-icon" aria-hidden="true"></span>
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