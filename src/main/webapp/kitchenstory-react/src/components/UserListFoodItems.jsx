import React,{useEffect, useState} from 'react'
import "./componentsstyles.css";
import {Link, useParams} from 'react-router-dom'
import AddFoodItem from './AddFoodItem';
import MakePayment from './MakePayment';

import FoodItemsService from '../services/FoodItemsService'

const UserListFoodItems = () =>
{
  
    const [result,addresult] = useState([]);
    const [fooditems,setFoodItems] = useState([])
    const [listofitems, additems] = useState([]);
    const [searchitems, addsearch] = useState([]);
    const [count, setState] = useState(0);

   
    function addItem(id, img, item, price) {
        var cartvalue =parseInt(document.getElementsByClassName("bubble")[0].innerHTML);
        document.getElementsByClassName("bubble")[0].innerHTML=cartvalue+1;
      const initialState = [...listofitems];
      initialState.push({
        itemid: id,
        image: img,
        foodname: item,
        price: price
      });
      console.log(initialState)
      setState(count+price);
      return additems(initialState);
    }

    function pay()
    {
        listofitems.map((key, id) => {
            const { image, foodname, price } = key;
           return <MakePayment image={image} foodname={foodname} price={price} />;
          })
    }

    
    useEffect(() => {
        FoodItemsService.getFoodItems().then((response)=>
        {
            setFoodItems(response.data)
        }).catch(error=>{
            console.log(error);
        })
    },[])



    function searchfun()
    {
      {
       result.push(fooditems.filter(food => food.foodname===(document.getElementById("search-id").value)))
      console.log( result)
      }
  } 



    return(
        <> <div className="search"> 
        <div><input type="text" id="search-id" placeholder="Search Food" className="search-box" /></div>
        <button className='search-btn' onClick={searchfun}>Search</button>
        </div>
        <div><i class="fa-solid fa-cart-shopping"></i></div>
        
        {/* {
        fooditems.filter(food => food.foodname==="Masala Chai").map(fooditem =>
        (<div className="item">  
        <div>{fooditem.itemid}</div>
        <div><img className="food-image" src={fooditem.image} /></div>
        <div>{fooditem.foodname}</div>
        <div>₹ {fooditem.price}</div>
        <div><button className="btn"  onClick={() =>
                addItem(fooditem.itemid, fooditem.image,fooditem.foodname,fooditem.price)}>Add to Cart</button></div>
        </div>)
       
        )
        } */}

        {
        result.map(
        fooditem=>
        <div className="item">  
        <div>{fooditem.itemid}</div>
        <div><img className="food-image" src={fooditem.image} /></div>
        <div>{fooditem.foodname}</div>
        <div>₹ {fooditem.price}</div>
        <div><button className="btn"  onClick={() =>
                addItem(fooditem.itemid, fooditem.image,fooditem.foodname,fooditem.price)}>Add to Cart</button></div>
        </div>
       
        )
        }

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
        <div><button className="btn"  onClick={() =>
                addItem(fooditem.itemid, fooditem.image,fooditem.foodname,fooditem.price)}>Add to Cart</button></div>
        </div>
       
        )
        }
        <div className="cart-container">
        <h3>My Cart</h3>  
        {
        
        listofitems.map(
        list=>
        <div className="items">  
        <div>{list.itemid}</div>
        <div><img className="fd-image" src={list.image} /></div>
        <div>{list.foodname}</div>
        <div>₹ {list.price}</div>
        </div>
        )
       
        }
        {listofitems.map((key, id) => {
            const { image, foodname, price } = key;
            <MakePayment image={image} foodname={foodname} price={price} />;
          })}
        <h4>Total bill : ₹ {count}</h4>
        <Link to="MakePayment" className="btn">Make Payment</Link>
        </div>
        
        </div> </>
    )
}
export default UserListFoodItems ;