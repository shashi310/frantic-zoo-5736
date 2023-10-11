import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css"
import logo from "../images/logo.png"
import 'typeface-poppins';
import axios from "axios";


function Navbar() {
  const user=JSON.parse(localStorage.getItem("MedUserData"))||{}
  console.log(user);
  const navigate= useNavigate()
  const handleclick=()=>{
      navigate("/product")
  }
  let ref= useRef()
const [query,setQuery] =useState("")
const paramObj={
 params:{
  q:query && query,
 }
}
useEffect(()=>{
  if(ref.current){
    clearTimeout(ref.current)
  }
  ref.current=setTimeout(()=>{
      // dispatch(getProducts(paramObj))
      console.log(paramObj);
    //   axios.get(`https://medmarketapi.onrender.com/products`,paramObj)
    // .then((res)=>{
    //     dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data});
    // })
    // .catch((err)=>{
    //     dispatch({type:PRODUCT_FAILURE,payload:err.message});
    // })
    },1000);
  

},[query])

  return (
    <div className='badabox'>
   <nav className='container'>
   <Link to="/"> <div className='logo'>
     <img src={logo} alt="picture"/>
    </div></Link>
    <div id='search_nav'>
    <input placeholder='What are you looking for?' onChange={(e)=>setQuery(e.target.value)} onClick={handleclick}/>
    <button>SEARCH</button>
    </div>
    <div className='nav_login_logos' style={{display:"flex",
      // justifyContent:"space-evenly",
      // alignItems:"center"
    }}>
    <div className='loginLogo'>
    <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg'/>
      <Link to="/login" ><span>{user?user.name.slice(0, 4):"Login"}</span></Link>

      </div>
    <div>
      <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44'/>
      <Link to="/Myorder" ><span>My Orders</span></Link>
      </div>
      <div className='loginLogo'>
      <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44'/>
      <Link to="/cart"><span>cart</span></Link>
    </div>
    </div>
    </nav>
    <div className='navbar-links'>
      <div><Link to="/product"><h4>Lab Test</h4></Link></div>
      
      <div><Link to="/product"><h4>Wellness</h4></Link></div>
      <div><Link to="/product"><h4>Medicine</h4></Link></div>
      <div><Link to="/product"><h4>Health Devices</h4></Link></div>
      <div><Link to="/product"><h4>Health Corner</h4></Link></div>
      <div><Link to="/product"><h4>Doctors</h4></Link></div>
      <div><Link to="/product"><h4>Book Appointment</h4></Link></div>
    
    </div>
    {/* <div className='megaMenu'>
       <ul>
        <li>
          <Link to="/"></Link>
          <ul>
            <li><Link to="/submenu1">Submenu Item 1</Link></li>
            <li><Link to="/submenu2">Submenu Item 2</Link></li>
            <li><Link to="/submenu3">Submenu Item 3</Link></li>
          </ul>
        </li>
       </ul>
    </div> */}
    </div>
  )
}

export default Navbar