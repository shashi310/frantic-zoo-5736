import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

function Signup() {
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
  
    const toast = useToast();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
        const response = await axios.post(`https://medmarketapi.onrender.com/login`,{name, email, password })
        .then((response)=>{
            toast({
                title: "SignUp successful",
                description: "User Registerd SuccessFully",
                status: "success",
                duration:4000,
                isClosable: true,
                
              });
              navigate("/login");
             
           })
           .catch((err)=>{
            console.log(err.message);
            
           })
    };
    
    
  
  
    return (
      <div>
        <Navbar />
      <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius={8}>
        <Text fontWeight="bold" fontSize="2xl" mb={6} textAlign="center">
          SignUp
        </Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" isLoading={false}>
              SignUp
            </Button>
          </Stack>
        </form>
    
  
  <Text mx="20%" marginTop="4">
    Already Registerd ?{" "}
    <Link to="/login" color="blue">
      Click Here
    </Link>
  </Text>
      </Box>
      </div>
    );
  };
export default Signup;