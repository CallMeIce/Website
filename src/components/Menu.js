import React from "react";
import "./style.css";

export default function Menu() {
  return (
    <div className="container">
    
      <br></br>
      <h1 class="list-group-item list-group-item-success rounded"><span className="textHeaders">Appetizers</span></h1>
      
      <br></br>
      <div class="row">
    <div class="col-6" >
    <div id="carouselExample" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="imgMenu" src={require('../images/mozz-sticks.jpg')} class="d-block w-100" height={450} alt="Mozzarella Sticks"></img>
      <figcaption  class="figure-caption text-end" className="imgCap">Mozzarella Sticks</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/onion-rings.jpg')}   class="d-block w-100" height={450} alt="Onion Rings"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Onion Rings</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/french-fry.jpg')}  class="d-block w-100" height={450} alt="French Fries"></img>
      <figcaption class="figure-caption text-end" className="imgCap">French Fries</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/Loaded_Potatoskins.jpg')}  class="d-block w-100" height={450} alt="Loaded Potato Skins"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Potato Skins</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/chicken-wings.jpg')}  class="d-block w-100" height={450} alt="Chicken Wings"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Chicken Wings</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/irish-nachos.jpg')} class="d-block w-100" height={450} alt="Irish Nachos"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Irish Nachos</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/4-leaf-clover.jpg')} class="d-block w-100" height={450} alt="4 Leaf Clover"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Four Leaf Clover</figcaption>
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
              <ul class="list-group list-group-flush d-inline-block rounded">
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Mozzarella Sticks ~or~ Onion Rings ... $6</span></strong>
        <br></br><p className="textAppDescription">Breaded mozzarella cheese sticks fried to a golden crunch ~or~ Thick-cut onions 
          dipped in a seasoned batter and fried until golden and crunchy, both served with warm marinara for the perfect taste</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">French Fries ... $7</span></strong>
        <br></br><p className="textAppDescription">Crispy, golden-cut potatoes fried to perfection, lightly seasoned with sea salt. Served hot and irresistibly crunchy</p></li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Potato Skins ... $8</span></strong>
        <br></br><p className="textAppDescription">Crispy potato halves loaded with cheese, bacon, and sour cream </p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Chicken Wings ... $10</span></strong>
        <br></br><p className="textAppDescription">BBQ, Buffalo, Mild, Teriyaki (Boneless ~or~ Bone-in)</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Irish Nachos ... $12</span></strong>
        <br></br><p className="textAppDescription">Sliced potatoes topped with melted cheese, 	jalapeños, and sour cream </p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Four Leaf Clover ...$22</span></strong>
        <br></br><p className="textAppDescription">Mix any of 4 appetizers</p>
        </li>
      </ul>
        </div>
  </div>
      <div>
          <br></br>
          <br></br>
      <h1 class="list-group-item list-group-item-success d-inline-block rounded" ><span className="textHeaders">Pub's Dazzlin' Classics!</span></h1>
      <br></br>
      <br></br>
      <div class="row">
    <div class="col-6">

    <div id="carouselMenu" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="imgMenu" src={require('../images/Chicken-quesadilla.jpg')} class="d-block w-100" height={450} alt="Chicken Quesadillas"></img>
      <figcaption  class="figure-caption text-end" className="imgCap">Chicken Quesadillas</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/cheese pizza.jpg')}   class="d-block w-100" height={450} alt="Personal Pizza"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Personal Pizza</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/guinness-beef-stew.jpg')}  class="d-block w-100" height={450} alt="The Liquid Gold Stew"></img>
      <figcaption class="figure-caption text-end" className="imgCap">The Liquid Gold Stew</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/The-classic-comfort.jpg')}  class="d-block w-100" height={450} alt="The Classic Comfort"></img>
      <figcaption class="figure-caption text-end" className="imgCap">The Classic Comfort</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/The-Irish-tradition.jpg')}  class="d-block w-100" height={450} alt="The Irish Tradition"></img>
      <figcaption class="figure-caption text-end" className="imgCap">The Irish Tradition</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/irish-potato-pancake.jpg')} class="d-block w-100" height={450} alt="The Potato Pancake Surprise"></img>
      <figcaption class="figure-caption text-end" className="imgCap">The Potato Pancake Surprise</figcaption>
    </div>
    <div class="carousel-item">
      <img className="imgMenu" src={require('../images/The-Lamb-King.jpg')} class="d-block w-100" height={450} alt="The Lamb King"></img>
      <figcaption class="figure-caption text-end" className="imgCap">The Lamb King</figcaption>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselMenu" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselMenu" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    

    </div>



    <div class="col-6">


    <ul class="list-group list-group-flush d-inline-block rounded">
        <li class="list-group-item list-group-item-success "><strong> <span className="textApp">Chicken Quesadillas … $14</span></strong>
        <br></br><p className="textAppDescription">Grilled flour tortillas stuffed with seasoned chicken, melted cheese, and served with salsa and sour cream</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Personal Pizza … $12.50</span></strong>
        <br></br><p className="textAppDescription">A perfectly portioned pizza with your choice of toppings, baked to golden, cheesy perfection</p></li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Liquid Gold Stew … $16</span></strong>
        <br></br><p className="textAppDescription">Slow-cooked beef with root vegetables, all simmered in a rich Guinness broth for deep, comforting flavor</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Classic Comfort ... $14</span></strong>
        <br></br><p className="textAppDescription">Juicy Irish sausages nestled on a bed of buttery mashed potatoes, drenched in savory onion gravy</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Irish Tradition ... $18</span></strong>
        <br></br><p className="textAppDescription">Tender, salty corned beef served with boiled cabbage, hearty potatoes, and sweet carrots</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Potato Pancake Surprise … $15</span></strong>
        <br></br><p className="textAppDescription">Traditional Irish potato pancake stuffed with your choice of chicken, crispy bacon, or smoked salmon</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">The Lamb King ... $22</span></strong>
        <br></br><p className="textAppDescription">Grilled lamb chops full of flavor, paired with garlic mashed potatoes and seasonal vegetables</p>
        </li>
      </ul>
        </div>  
  </div>
<br></br>
        <br></br>
        <br></br>
  <h1 class="list-group-item list-group-item-success rounded d-inline-block"><span className="textHeaders">Desserts</span></h1>
  <br></br>
  <br></br>
      <div class="row">
    <div class="col-6">

    <div id="carouselExampleDessert" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('../images/cheesecake.webp')} class="d-inline-block w-100" height={450} alt="Bailey's Cheesecake"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Bailey's Cheesecake</figcaption>
    </div>
    <div class="carousel-item">
      <img  src={require('../images/Guinness-Chocolate-Cake.jpg')}   class="d-inline-block w-100" height={450} alt="Guinness Chocolate Cake"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Guinness Chocolate Cake</figcaption>
    </div>
    <div class="carousel-item">
      <img src={require('../images/Sticky-Toffee-Pudding.jpg')}  class="d-block w-100" height={450} alt="Sticky Toffee Pudding"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Sticky Toffee Pudding</figcaption>
    </div>
    <div class="carousel-item">
      <img src={require('../images/Apple-tart.jpg')}  class="d-block w-100" height={450} alt="Apple Tart"></img>
      <figcaption class="figure-caption text-end" className="imgCap">Irish Apple Tart</figcaption>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDessert" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDessert" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>



    <div class="col-6">


    <ul class="list-group list-group-flush d-inline-block rounded">
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Bailey's Cheesecake … $8</span></strong>
        <br></br><p className="textAppDescription">Creamy cheesecake infused with Baileys Irish Cream</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Guinness Chocolate Cake … $9</span></strong>
        <br></br><p className="textAppDescription">Rich, moist chocolate cake made with Guinness stout</p></li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Sticky Toffee Pudding … $9</span></strong>
        <br></br><p className="textAppDescription">Warm sponge cake drenched in toffee sauce, served with cream</p>
        </li>
        <li class="list-group-item list-group-item-success"><strong> <span className="textApp">Irish Apple Tart … $7</span></strong>
        <br></br><p className="textAppDescription">Flaky pastry filled with cinnamon-spiced apples, served with vanilla ice cream</p>
        </li>
      </ul>
        </div>  
  </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
