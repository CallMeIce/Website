import React from "react";
import "./style.css";

export default function Menu() {
  return (
    <div className="container">
      <br></br>
      <h1 className="menuFont">Menu</h1>
      <h2 className="menuFont"><br></br>Appetizers</h2>
      <br></br>
      <div class="row">
    <div class="col-6" >
    <div id="carouselExample" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="imgMenu" src={require('../images/mozz-sticks.jpg')} class="d-block w-100" alt="Mozzarella Sticks"></img>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/onion-rings.jpg')}   class="d-block w-100" alt="Onion Rings"></img>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/french-fry.jpg')}  class="d-block w-100" alt="French Fries"></img>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/chicken-wings.jpg')}  class="d-block w-100" alt="Chicken Wings"></img>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/Loaded_Potatoskins.jpg')}  class="d-block w-100" alt="Loaded Potato Skins"></img>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/irish-nachos.jpg')} class="d-block w-100" alt="Irish Nachos"></img>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/4-leaf-clover.jpg')} class="d-block w-100" alt="4 Leaf Clover"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      




      </div>
    <div class="col-6">
              <ul class="list-group list-group-flush d-inline-block">
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Mozzarella Sticks ~or~ Onion Rings ... $6</span></strong>
        <br></br><p>Breaded mozzarella cheese sticks fried to a golden crunch ~or~ Thick-cut onions 
          dipped in a seasoned batter and fried until golden and crunchy, both served with warm marinara for the perfect taste</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">French Fries ... $7</span></strong>
        <br></br><p>Crispy, golden-cut potatoes fried to perfection, lightly seasoned with sea salt. Served hot and irresistibly crunchy</p></li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Potato Skins ... $8</span></strong>
        <br></br><p>Crispy potato halves loaded with cheese, bacon, and sour cream. </p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Chicken Wings ... $10</span></strong>
        <br></br><p>BBQ, Buffalo, Mild, Teriyaki (Boneless ~or~ Bone-in)</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Irish Nachos ... $12</span></strong>
        <br></br><p>Sliced potatoes topped with melted cheese, 	jalapeños, and sour cream. </p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Four Leaf Clover ...$22</span></strong>
        <br></br><p>Mix any of 4 appetizers</p>
        </li>
      </ul>
        </div>
  </div>
      <div>
          <br></br>
          <br></br>
      <h2><br></br>Pub's Dazzlin' Classics!</h2>
      <br></br>
      <div class="row">
    <div class="col-4">col-8</div>
    <div class="col-8">
      <ul>
      <li>$14.00 - Chicken Quesadillas
      Grilled flour tortillas stuffed with seasoned chicken, melted cheese, and served with salsa and sour cream.</li>
      <li>$12.50 -Personal Pizza
      A perfectly portioned pizza with your choice of toppings, baked to golden, cheesy perfection.</li>
      <li>$16.00 - The Liquid Gold Stew
      Slow-cooked beef with root vegetables, all simmered in a rich Guinness broth for deep, comforting flavor.</li>
      <li>$14.00 - The Classic Comfort
      Juicy Irish sausages nestled on a bed of buttery mashed potatoes, drenched in savory onion gravy.</li>
      <li>$18.00 - The Irish Tradition
      Tender, salty corned beef served with boiled cabbage, hearty potatoes, and sweet carrots.</li>
      <li>$15.00 - The Potato Pancake Surprise
      Traditional Irish potato pancake stuffed with your choice of chicken, crispy bacon, or smoked salmon.</li>
      <li>$22.00 - The Lamb King
      Grilled lamb chops full of flavor, paired with garlic mashed potatoes and seasonal vegetables.</li>
      <li>$18.00 - The Coastal Cream
      Fresh mussels simmered in a creamy garlic and white wine sauce, served with warm, crusty bread.</li>
      </ul>
        </div>
  </div>

      </div>
    </div>
  );
}
