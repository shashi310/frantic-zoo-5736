import { useEffect, useState } from "react";
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

const LoginSignup = () => {
  const navigate = useNavigate()
const [users,setUsers]=useState([])

  const [email, setEmail] = useState("dreko@gmail.com");
  const [password, setPassword] = useState("dreko");
  const [isLogin, setIsLogin] = useState(true);

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const matchedUser = users.find((user) => user.email === email && user.password === password);

    if(matchedUser){
     localStorage.setItem("MedUserData", JSON.stringify(matchedUser)); 
        toast({
          title: "Login successful",
          description: "Welcome back!",
          status: "success",
          duration:4000,
          isClosable: true,
          
        });
        navigate("/");
 
  };
}
  
useEffect(()=>{
  try {
    const response =  axios.get(`https://medmarketapi.onrender.com/login`)
    .then((response)=>{
 
  setUsers(response.data)
    })
  } catch (error) {
    console.log(error);
  }
},[])

  return (
    <div>
      <Navbar />
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius={8}>
      <Text fontWeight="bold" fontSize="2xl" mb={6} textAlign="center">
        Login
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
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
            Login
          </Button>
        </Stack>
      </form>
  

<Text mx="20%" marginTop="4">
  New User ?{" "}
  <Link to="/signup" color="blue">
    Click Here
  </Link>
</Text>
    </Box>
    </div>
  );
};

export default LoginSignup;
