import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/${isLogin ? "login" : "signup"}`,
        { email, password }
      );
      if (isLogin) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
          status: "success",
          duration:4000,
          isClosable: true,
          
        });
        navigate("/");
      } else {
        setEmail("");
        setPassword("");
        setIsLogin(true);
        toast({
          title: "Signup successful",
          description: "Your account has been created.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // handle error
    }
  };
  
    
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8080/${isLogin ? "login" : "signup"}`,
  //       { email, password }
  //     );
  //     toast({
  //       title: `${isLogin ? "Login" : "Signup"} successful`,
  //       description: `Welcome!`,
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   } catch (error) {
      
  //   }
  //   setTimeout(() => {
     
  //     setEmail("");
  //     setPassword("");
  //     alert("Account created. Please log in to continue.");   
  //     navigate("/")
  //   }, 1000);
  // };

  


  return (
    <div>
      <Navbar />
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius={8}>
      <Text fontWeight="bold" fontSize="2xl" mb={6} textAlign="center">
        {isLogin ? "Login" : "Signup"}
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
            {isLogin ? "Login" : "Signup"}
          </Button>
        </Stack>
      </form>
      <Box textAlign="center" mt={4}>
        <Text>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Box
            as="span"
            color="blue.500"
            cursor="pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Signup" : " Login"}
          </Box>
        </Text>
      </Box>
    </Box>
    </div>
  );
};

export default LoginSignup;
