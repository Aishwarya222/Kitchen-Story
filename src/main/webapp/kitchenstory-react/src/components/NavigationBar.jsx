import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import AddFoodItem from './AddFoodItem';
function NavigationBar() {
    let navigate = useNavigate();
    return ( 
    <>
        <div className="navbar">
            <div className="brand">
            <div><img src="https://png.pngtree.com/element_our/png/20181011/illustration-of-spoon-and-fork-graphic-design-template-vector-png_126810.jpg" className="logo"></img></div>
            <Link to="WelcomeUser" className="brand-name">Kitchen Story</Link>
            </div>
            {/* <div className="search"> 
            <div><input type="text" placeholder="Search Food" className="search-box" /></div>
            <div><button className="search-btn">Search</button></div>
            </div>
            <Link to="AddFoodItem" className="search-btn">Add Food Items</Link>
            <div><i class="fa-solid fa-cart-shopping"></i></div> */}
        </div>
    </> );
}

export default NavigationBar;