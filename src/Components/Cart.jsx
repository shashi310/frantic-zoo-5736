import { Box, Button, Text } from "@chakra-ui/react";
import { SimpleGrid, Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../css/Cart.css"
import Navbar from "../Routes/Navbar";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    fetchCartData();
  }, []);
  
  // function fetchCartData() {
  //   axios.get(`http://localhost:8080/cart`)
  //     .then((res) => setCartItems(res.data))
  // }
  // function fetchCartData() {
  //   axios.get(`http://localhost:8080/cart`)
  //   .then((res) => setCartItems(res.data.map((item) => ({ ...item, quantity: 1 }))))
  //   }
  function fetchCartData() {
    axios.get(`http://localhost:8080/cart`)
      .then((res) => {
        const cartItemsWithDefaultQuantity = res.data.map(item => ({...item, quantity: 1}));
        setCartItems(cartItemsWithDefaultQuantity);
      })
  }

  
  const handleRemoveItem = (itemId) => {
    axios.delete(`http://localhost:8080/cart/${itemId}`)
      .then(() => fetchCartData())
      .catch((error) => console.log(error));
  }
  const handleQuantityChange = (itemId, action) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(item => item.id === itemId);
    if (action === 'increment') {
      updatedCartItems[itemIndex].quantity += 1;
    } else if (action === 'decrement') {
      updatedCartItems[itemIndex].quantity -= 1;
    }
    setCartItems(updatedCartItems);
    axios.put(`http://localhost:8080/cart/${itemId}`, updatedCartItems[itemIndex])
      .catch((error) => console.log(error));
  };
  
  
 
  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const filteredCartItems = cartItems.filter(item => item !== null);
  
  return (
    <div>
    <Navbar/>
    <div className="cards">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing="4">
        {filteredCartItems.map((ele) => (
          <Card maxW='250px' key={ele.id}>
            <CardBody>
              <Image
                src={ele.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{ele.name}</Heading>
                
          <Text color='green.600' fontSize='1.5xl'>
          Category - {ele.category}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
         Price - ₹{ele.price}
          </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button colorScheme="red" onClick={() => handleRemoveItem(ele.id)}>
                Remove
              </Button>
              <ButtonGroup size="sm" ml="2">
                <Button 
                disabled={ele.quantity==1}
                onClick={() => handleQuantityChange(ele.id, 'decrement')}>
                  -
                </Button>
                <Button>
                  {ele.quantity}
                </Button>
                <Button onClick={() => handleQuantityChange(ele.id, 'increment')}>
                  +
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      </div>
      <div className="cart-payment">

        <Box p="4" borderWidth="1px" borderRadius="md">
          <Text fontSize="xl" mb="4">
            Your Bill
          </Text>
          {filteredCartItems.map((item,ind) => (
            <Box key={item.id} mb="4">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                {/* <Text fontSize="sm">{item.title}</Text> */}
              </Box>
                <Text fontWeight="bold">item: {ind+1}  </Text>
                <Text fontSize="sm">Rs : {item.price}</Text>
              </Box>
          ))}
          <Box mb="4">
            <Text fontWeight="bold" fontSize="2xl" >Total:</Text>
            <Text fontSize="2xl" fontWeight="bold"  >Rs {totalPrice.toFixed(2)}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold">Buy Now:</Text>
           <Button colorScheme="teal" >
           <Link to="/payment" >  Proceed to pay</Link>
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Cart;