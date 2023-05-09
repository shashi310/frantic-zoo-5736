import React, { useState,useEffect } from "react";
import axios from "axios"
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import Navbar from "../Routes/Navbar";

const getData= (url)=>{
  return axios.get(url)
}


const MyOrder = () => {
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
    fetchAndUpdateData(`http://localhost:8080/orders`)
    },[])
  
  
    // console.log(data[0].cart[0].image);


  return (
   <div>
    <Navbar />
    <Box
      bg="white"
      border="2px solid"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      m={4}
      boxShadow="md"
    >
      <Flex align="center">
        <Image
          src={data[data.length-1]?.cart[0]?.image}
          alt={data[data.length-1]?.cart[0]?.name}
          boxSize={20}
          objectFit="cover"
          mr={4}
        />
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            {data[data.length-1]?.cart[0]?.name}
          </Text>
          <Text fontWeight="bold" color="gray.500">
            ₹{data[data.length-1]?.cart[0]?.price}
          </Text>
        </Box>
        <Box ml="auto">
          <FaTimes color="red" cursor="pointer" />
        </Box>
      </Flex>
    </Box>
    </div>
  );
};

export default MyOrder;