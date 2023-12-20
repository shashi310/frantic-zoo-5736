import  {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import Navbar from "../Routes/Navbar"
import Footer from "../Components/Footer";
import { Box ,Text,Grid,Card,sm,Flex,CardBody,Image,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react";
import axios from 'axios'
import Loading from "../Components/Loading";



const getData= (url)=>{
  return  fetch(url).then((res)=>res.json())
}

function SingleRestaurantPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItems3, setCartItems3] = useState([]);
  const [loading,setLoading] =useState(false)
  const [err,setError] = useState(false)
const [data,setData]= useState([])
const {id}= useParams()

useEffect(()=>{
setLoading(true)
getData(`https://medmarketapi.onrender.com/products/${id}`).then((res)=>{
  setData(res)
  setLoading(false)
})
.catch(()=>{
  setLoading(false)
  setError(true)
})
},[id])

if(loading){
  return <Loading />
}

if(err){
  return <div>Something Went wrong</div>
}
const handleCartfun = (id) => {
  return axios.get(`https://medmarketapi.onrender.com/products/${id}`);
};
const addToCart = (ele) => {
  handleCartfun(ele.id)
    .then((res) => {
      setCartItems(res?.data);
      return axios.post("https://medmarketapi.onrender.com/cart", res?.data);
    })
    .then(() => {
      alert("Product Added Successfully");
      // getData();
    })
    .catch((err) => console.log(err));
};
// const getData = () => {
//   setLoading(true);
//   axios.get(`http://localhost:8080/cart`)
//     .then((res) => setCartItems3(res.data))
//     .catch((err) => alert(err))
//     .finally(() => setLoading(false));
// };

  return (<>
    <Navbar />
    <div data-testid="restaurant-container" style={{display:"flex",
    marginLeft:"70px",
    padding:"10px"
  
  }}>
        <Card >
        <img data-testid="restaurant-image" width={"350px"} src={data.image} alt={data.name} />
       </Card >
     
        <Card w={700}>
        <h1 style={{fontSize:"22px",
      fontWeight:"bold",
      padding:"10px"
      }}>
        {data.name}</h1>
      <div style={{fontSize:"20px", padding:"10px"}}>  Type: {data.mkt}</div>
      <div style={{fontSize:"20px", padding:"10px"}}>  Rating: {data.rating}</div>
      <div style={{fontSize:"20px", padding:"10px"}} >  Category: {data.category}</div>
      <div style={{fontSize:"20px", padding:"10px"}} >  Price: ${data.price}</div>
      <Button m="10px" colorScheme='teal' variant='outline' onClick={() => addToCart(data)}>Add to Card</Button>
      <Button m="10px" colorScheme='teal'>Buy Now</Button>
        </Card>
      
    </div>
    
    </> );
}
export default SingleRestaurantPage;
