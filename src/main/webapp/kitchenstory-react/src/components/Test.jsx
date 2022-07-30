import React, {Component} from "react";
import { useState } from "react";
import FoodItemsService from "../services/FoodItemsService";
import "./componentsstyles.css";
function Test() {

        const [fooditems,update] = useState([]);
     
        FoodItemsService.getFoodItems().then((res)=>
        {
            this.setState({fooditems:res.data});
        });

    const addItem = () => 
    {
      
        var cartvalue =parseInt(document.getElementsByClassName("bubble")[0].innerHTML);
        document.getElementsByClassName("bubble")[0].innerHTML=cartvalue+1;
        
     }
        
return ( 
              
<div className="container">
<div className="bubble">0</div>
{
this.state.fooditems.map(
fooditem=>
<div className="item">  
<div>{fooditem.itemid}</div>
<div><img className="food-image" src={fooditem.image} /></div>
<div>{fooditem.foodname}</div>
<div>₹ {fooditem.price}</div>
<div><button className="btn" onClick={addItem}>Add to Cart</button></div>
</div>
)
}
</div>
         );
}

 
export default Test ;