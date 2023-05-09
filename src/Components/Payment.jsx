import React, { useState,useEffect } from "react";
import axios from "axios"
import { Text } from "@chakra-ui/react";
import "../css/Payment.css"
import Final from "./Final";
import Navbar from "../Routes/Navbar";


import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

const getData= (url)=>{
  return axios.get(url)
}
let timese=null;

const Payment = () => {
  const navigate = useNavigate()
  const [isClicked, setIsClicked] = useState(false);
  // const [userDetails, setUserDetails] = useState({
  //   name: "",
  //   email: "",
  //   address: "",
  //   zip: "",
  // });

  const [cardDetails, setCardDetails] = useState({
    name: "",
    email: "",
    address: "",
    zip: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });




// fetch the cart details ****************************
const [data,setData]=useState([])
const fetchAndUpdateData = async (url)=>{
  try {    
      let res = await getData(url)        
         // console.log(res?.data);
        setData(res?.data)
  } catch (err) {
      console.log(err)
      // set err state to false 
  }
}
useEffect (()=>{
  fetchAndUpdateData(`http://localhost:8080/cart`)
  },[])


  console.log(data);
  console.log(cardDetails);
// ****************************


// now post data to the server
function Postme(){
  if(timese){
    clearTimeout(timese)
  }
 timese= axios.post(`http://localhost:8080/orders`,{
  userdatails:cardDetails,
  cart:data,
},20000)
}





  

  // const handleUserInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserDetails({ ...userDetails, [name]: value });
  // };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
    
  };
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = () => {
    setTimeout(() => {
      navigate("/final")
    }, 1000);
    setTimeout(() => {
      navigate("/");
      Postme()
    }, 4000);
  };







  return (
   <div>
   
    <Navbar />
  
    <div  style={{
      backgroundImage: "url('https://cdn.shopify.com/s/files/1/0720/8186/7039/articles/what-is-healthcare-707998.png?v=1677580538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <div className="conatiner-payment" style={{backgroundColor:"white"}}>
    <Box p="4">
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel fontSize="xs">Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Name" size="xs"
            value={cardDetails.name}
            onChange={handleCardInputChange}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel fontSize="xs">Email address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email Here" size="xs"
            value={cardDetails.email}
            onChange={handleCardInputChange}
          />
        </FormControl>
        <FormControl id="address">
          <FormLabel fontSize="xs">Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Enter Address Here" size="xs"
            value={cardDetails.address}
            onChange={handleCardInputChange}
          />
        </FormControl>
        {/* <FormControl id="city">
          <FormLabel fontSize="xs">City</FormLabel>
          <Input
            type="text"
            name="city"
            placeholder="Enter City Name Here" size="xs"
            value={userDetails.city}
            onChange={handleUserInputChange}
          />
        </FormControl>
        <FormControl id="state">
          <FormLabel fontSize="xs">State</FormLabel>
          <Input
            type="text"
            name="state"
            placeholder="Enter State Here" size="xs"
            value={userDetails.state}
            onChange={handleUserInputChange}
          />
        </FormControl> */}
        <FormControl id="zip">
          <FormLabel fontSize="xs">Zip</FormLabel>
          <Input
            type="text"
            name="zip"
            placeholder="Enter Pin-code Here" size="xs"
            value={cardDetails.zip}
            onChange={handleCardInputChange}
          />
        </FormControl>
        <FormControl id="cardNumber">
          <FormLabel fontSize="xs">Card number</FormLabel>
          <Input
            type="text"
            name="cardNumber"
            placeholder="Enter Card Number" size="xs"
            value={cardDetails.cardNumber}
            onChange={handleCardInputChange}
          />
        </FormControl>
        <FormControl id="expDate">
          <FormLabel fontSize="xs">Expiration date</FormLabel>
          <Input
            type="text"
            name="expDate"
            value={cardDetails.expDate}
            placeholder="Exp Date" size="xs"
            onChange={handleCardInputChange}
          />
        </FormControl>
        <FormControl id="cvv">
          <FormLabel fontSize="xs">CVV</FormLabel>
          <Input
            type="text"
            name="cvv"
            value={cardDetails.cvv}
            placeholder="CVV" size="xs"
            onChange={handleCardInputChange}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
          Confirm order
        </Button>
      </Stack>
    </Box>
    </div>
   
    </div>
    </div>
  );
};

export default Payment


