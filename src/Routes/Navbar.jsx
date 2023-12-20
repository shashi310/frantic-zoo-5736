import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css"
import logo from "../images/logo.png"
import 'typeface-poppins';
import axios from "axios";
import { Image, Text ,Input,Box} from "@chakra-ui/react";
import { IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody,useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


function Navbar() {
  const user=JSON.parse(localStorage.getItem("MedUserData"))||""
  // console.log(user);
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
      // console.log(paramObj);
    //   axios.get(`https://medmarketapi.onrender.com/products`,paramObj)
    // .then((res)=>{
    //     dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data});
    // })
    // .catch((err)=>{
    //     dispatch({type:PRODUCT_FAILURE,payload:err.message});
    // })
    },1000);
  

},[query])

// for the hamburger
const [isOpen, setIsOpen] = useState(false);
const display = useBreakpointValue({ base: 'block', md: 'none', });
const toggleMenu = () => {
  setIsOpen(!isOpen);
};




  return (
    <div className='badabox'>
   <nav className='container'>
   <Link to="/"> <div className='logo'>
     <img src={logo} alt="picture"/>
    </div></Link>
    <Box id='search_nav'  display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}>
    <input placeholder='What are you looking for?' onChange={(e)=>setQuery(e.target.value)} onClick={handleclick}/>
    <button>SEARCH</button>
    </Box>
    <div className='nav_login_logos' style={{display:"flex",
      // justifyContent:"space-evenly",
      // alignItems:"center"
    }}>
    <Box className='loginLogo' display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        }} >
    <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg'/>
    {user?<Link to="/login" ><span>{user.name?.slice(0, 4)}</span></Link>: 
      
      <Link to="/login" ><span>Login</span></Link>}
      </Box>
    <Box display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        }}>
      <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44'/>
      <Link to="/Myorder" ><span>My Orders</span></Link>
      </Box>
      <Box className='loginLogo' display={{
          base: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        }}>
      <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44'/>
      <Link to="/cart"><span>cart</span></Link>
    </Box>





    </div>
{/* for the mobile screen */}
<IconButton
        aria-label="Menu"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleMenu}
        variant="ghost"
        display={display}
      />

      <Drawer placement="left" onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <Image
        cursor="pointer"
        w="120px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JckdmkhSHLMuXJW6KkYfljemordAT-wOCQ&usqp=CAU"
        alt="logo"
      />

          </DrawerHeader>
          <DrawerBody>
            
        <Link>Medicine</Link>
        <Text>Lab Test</Text>
        <Text>Explore</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
{/* hamburger ends */}

    </nav>
    <div className='navbar-links'>
      <Box display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}><Link to="/product"><h4>Lab Test</h4></Link></Box>
      
      <Box><Link to="/product"><h4>Wellness</h4></Link></Box>
      <Box><Link to="/product"><h4>Medicine</h4></Link></Box>
      <Box><Link to="/product"><h4>Health Devices</h4></Link></Box>
      <Box display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}><Link to="/product"><h4>Health Corner</h4></Link></Box>
      <Box display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}><Link to="/product"><h4>Doctors</h4></Link></Box>
      <Box display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}><Link to="/product"><h4>Book Appointment</h4></Link></Box>
    
    </div>
    
    </div>
  )
}

export default Navbar