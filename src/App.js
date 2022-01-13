import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Customers from "./pages/customers/Customers";
import UpdateCustomers from "./pages/edit-customers/Edit-customers";
import Book from "./pages/booking/booking";
import { useState } from "react";
import './App.css';
import girl from './assets/girl.jpg'


 
function App() {
  const [active, setActive] = useState("Home");

  return (
    
    <Router>
      <header>
        <h1>Hotel Management System</h1>
<div  className="header__image">
 <img src={girl} alt="girl-img" />
</div>

      </header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={active === "Home" ? "active" :null}
              onClick={() => setActive("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              onClick={() => setActive("Customers")}
              className={active === "Customers" ? "active" : ""}
            >
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update"
              onClick={() => setActive("Update")}
              className={active === "Update" ? "active" : ""}
            >
              Edit customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setActive("About")}
              className={active === "About" ? "active" : ""}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/update/:id" element={<UpdateCustomers />}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route  path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
