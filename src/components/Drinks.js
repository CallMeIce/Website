import React from "react";

export default function Drinks() {

return (
  <div>
    <div className="menuFont">
        <h1>Drinks</h1>
        <br></br>
        <h2>Pub's Dazzlin' Classics!</h2>
</div>


        <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/Baileys-Mint-Martini-5-1.jpg')} class="card-img-top" alt="The Irish Eyes"></img>
  <div class="card-body list-group-item-success">
    <h6>The Irish Eyes...$9.00</h6>
    <p class="card-text" className="textAppDescription">Whiskey, Bailey, & Creme De Menthe</p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/Irish-trash-can.jpg')} class="card-img-top" alt="The Belfast Trash Can"></img>
  <div class="card-body list-group-item-success">
    <h6>The Belfast Trash Can...$12.00</h6>
    <p class="card-text" className="textAppDescription">Gin, Light Rum, Vodka, Peach Schnapps, Bols Blue Curacao, & Triple Sec</p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/Irish-coffee.jpg')} class="card-img-top" alt="Irish Coffee"></img>
  <div class="card-body list-group-item-success">
    <h6>Irish Coffee...$8.00</h6>
    <p class="card-text" className="textAppDescription">Whiskey, Ground Coffee, Demerara Sugar, Fresh Cream, & Nutmeg </p>
  </div>
</div>
    </div>

   <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/irish-gold.jpg')} class="card-img-top" alt="Irish Gold"></img>
  <div class="card-body list-group-item-success">
    <h6>Irish Gold...$8.00</h6>
    <p class="card-text" className="textAppDescription">Whiskey, Ginger Ale, Peach Schnapps, & Fresh Orange</p>
  </div>
</div>
    </div>
      </div>

      <br></br>
      <br></br>

      <div class="row">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/Nutty-Irishman.webp')} class="card-img-top" alt="Nutty Irishman"></img>
  <div class="card-body list-group-item-success">
    <h6>Nutty Irishman...$10.00</h6>
    <p class="card-text" className="textAppDescription">Bailey's Irish Cream, Frangelico Hazelnut Liquor, & Ice</p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/Irish-lemonade.jpg')} class="card-img-top" alt="Irish Lemonade"></img>
  <div class="card-body list-group-item-success">
    <h6>Irish Lemonade...$8.00</h6>
    <p class="card-text" className="textAppDescription">Jameson, Ginger Beer, Fresh Lemonade, & Fresh Mint</p>
  </div>
</div>
    </div>

    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/The-mule.jpg')} class="card-img-top" alt="The Mule"></img>
  <div class="card-body list-group-item-success">
    <h6>The Mule...$8.00</h6>
    <p class="card-text" className="textAppDescription">Ginger Beer, Whiskey, Lime, & Ice</p>
  </div>
</div>
    </div>

   <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src={require('../images/mudslide.webp')} class="card-img-top" alt="The Mudslide"></img>
  <div class="card-body list-group-item-success">
    <h6>The Mudslide...$10.00</h6>
    <p class="card-text" className="textAppDescription">Whiskey, Baileys, Kahlua, Chocolate Syrup, Whipped Cream, Milk Chocolate</p>
  </div>
</div>
    </div>
      </div>
      </div>




      <br></br>
      <br></br>
</div>
      
)
}