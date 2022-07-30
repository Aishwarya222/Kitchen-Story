import "./HomePage.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import FoodItemsService from '../services/FoodItemsService'
import ListFoodItems from "./ListFoodItems";
function Home() {
    
    const [un,setUser] =useState('');
    const [pass,setPass] =useState('');
    const navigate  = useNavigate();

    const addAccount=(event)=>
    { alert("Account Created")
        event.preventDefault();
        const user = {un,pass}
        FoodItemsService.createUser(user).then((response)=>
        {
           navigate('/Home/Adduser')
           
        }).catch(error=>{
            console.log(error);
        })

    }
    function login()
    {
        return <ListFoodItems />
    }
    return ( 
    <div className="image-container">
    <div className="container-form">
    <h1>CREATE AN ACCOUNT</h1>
     <div><input className="tb" type="text" value={un} onChange={(e)=>setUser(e.target.value)}  placeholder="Email Id" /></div>
     <div><input className="tb" type="password" value={pass} onChange={(e)=>setPass(e.target.value)}  placeholder="Set Password" /></div>
     <div><input  className="tb" type="password" placeholder="Reapeat Password" /></div>
     <button onClick={ (e)=>addAccount(e)} class="search-btn">Signup</button>
     <h1>__________________</h1>
	 <h4> Have an account? </h4>
     <button class="search-btn" onClick={login}>Login</button>
     <Link to="WelcomeUser" id="admin" className="search-btn">Admin Login</Link>
     
     </div></div>  );
}

export default Home;