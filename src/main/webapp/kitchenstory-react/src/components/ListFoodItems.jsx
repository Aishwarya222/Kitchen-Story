import React,{useEffect, useState} from 'react'
import "./componentsstyles.css";
import {Link,useParams} from 'react-router-dom'

import FoodItemsService from '../services/FoodItemsService'

const ListFoodItems = () =>
{
    const [fooditems,setFoodItems] = useState([])
    
    useEffect(() => {
        FoodItemsService.getFoodItems().then((response)=>
        {
            setFoodItems(response.data)
        }).catch(error=>{
            console.log(error);
        })
    },[])

    function addItem() {
      
        var cartvalue =parseInt(document.getElementsByClassName("bubble")[0].innerHTML);
        document.getElementsByClassName("bubble")[0].innerHTML=cartvalue+1;
        
     }

    return(
        <> <div className="search"> 
        <div><input type="text" placeholder="Search Food" className="search-box" /></div>
        <div><button className="search-btn">Search</button></div>
        </div>
        <Link to="AddFoodItem" className="additem-btn">Add Food Items</Link>
        {/* <button onClick={()=>{navigate("/AddFoodItem")}}></button> */}
        <div><i class="fa-solid fa-cart-shopping"></i></div>
        <div className="container">
        <div className="bubble">0</div>
        {
        fooditems.map(
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
        </div> </>
    )
}
export default ListFoodItems ;