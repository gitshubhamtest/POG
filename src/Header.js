import React from "react";
import { BrowserRouter,Link,Switch,Route} from "react-router-dom";
import "./Header.css"
import Home from "./Header/Home"
import AboutUs from "./Header/AboutUs";
import Contact from "./Header/Contact";
import Cart from "./Header/Cart";
import Login from "./Header/Login"
import Product from "./Header/Product";

const Header = (props) =>{
    return(
        <div className="MainHeader">
            
          <BrowserRouter>
          <div className="RouterHeader">
          <h3>{props.slogan}</h3>
          <div className="RouterLink">
            <Link to="/" className="MainLink">Home</Link>
            <Link to="/About" className="MainLink">About Us</Link>
            <Link to="/Product" className="MainLink">Products</Link>
            <Link to="/Contact" className="MainLink">Contact</Link>
            <Link to="/Cart" className="MainLink">Cart</Link>
            <Link to="/Login" className="MainLink">welcome Guest</Link>
            </div>
          </div>
          <hr/>
          <Switch>
            <Route exact path="/" component={Home}><Home/></Route>
            <Route exact path="/About" component={AboutUs}><AboutUs/></Route>
            <Route exact path="/Contact" component={Contact}><Contact/></Route>
            <Route exact path="/Product" component={Product}><Product/></Route>
            <Route exact path="/Cart" component={Cart}><Cart/></Route>
            <Route exact path="/Login" component={Login}><Login/></Route>
            
          </Switch>
          
          </BrowserRouter>

        </div>
    )
}
export default Header;