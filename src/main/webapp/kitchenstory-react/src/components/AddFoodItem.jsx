import { useState } from "react";
import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import FoodItemsService from '../services/FoodItemsService'

function AddFoodItem() {

    const [foodname,setFoodName] =useState('');
    const [image,setImage] =useState('');
    const [price,setPrice] =useState('');
    const navigate  = useNavigate();

    const addFood=(event)=>
    {
        event.preventDefault();
        const food = {foodname,image,price}
        console.log(food)
        FoodItemsService.createFoodItems(food).then((response)=>
        {
           navigate('/listAllFoodItems/additems')
           alert("Item Added Successfully")
        }).catch(error=>{
            console.log(error);
        })

    }
    return ( <div className="addfoodcontainer">
        <h1>Add Food Items</h1>
        <div><input className="tb1" type="text" value={foodname} placeholder="Food Item Name" onChange={(e)=>setFoodName(e.target.value)}></input></div>
        <div><input className="tb1" type="text" value={image} placeholder="Image Link" onChange={(e)=>setImage(e.target.value)}></input></div>
        <div><input className="tb1" type="text" value={price} placeholder="Price of Food"  onChange={(e)=>setPrice(e.target.value)}></input></div>
        <button className="search-btn" onClick={addFood}>Add Food</button>
    </div>  );
}

export default AddFoodItem;