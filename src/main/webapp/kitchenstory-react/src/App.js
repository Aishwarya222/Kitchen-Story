import './App.css';
import ListFoodItems from './components/ListFoodItems';
import AddFoodItem from './components/AddFoodItem';
import MakePayment from './components/MakePayment'
import Home from './components/Home';
import UserListFoodItems from './components/UserListFoodItems';

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';



function App() {
  return (
  <>
 
 <Router>
 <NavigationBar/>
 <Routes>
 <Route  path='/Home/WelcomeAdmin'  element={<ListFoodItems/>}></Route>
 <Route  path='/Home/WelcomeUser'  element={<UserListFoodItems/>}></Route>
 <Route  path='/WelcomeAdmin/AddFoodItem'  element={<AddFoodItem/>}></Route>
 <Route  path='WelcomeUser/MakePayment'  element={<MakePayment/>}></Route>
 <Route  path='/Home'  element={<Home/>}></Route>
</Routes>
</Router>
  </>);
 
}

export default App;
