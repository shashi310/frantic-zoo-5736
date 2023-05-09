import "../css/Product.css"
import axios from 'axios'
import { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Footer from "../Components/Footer"
import { Box ,Text,Grid,Card,CardBody,Image,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";

import Cart from "../Components/Cart"
import { Spinner } from "@chakra-ui/react";
// import Pagination from "../Components/Pagination"

function Product() {
  const [data, setData] = useState([]);
  const [filterByColors, setFilterByColors] = useState([]);
  const [order, setOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartItems3, setCartItems3] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:8080/products`, {
      params: {
        _sort: "price",
        _order: order
      }
    })
      .then((res) => res.data)
      .then(data => {
        let filteredData = data;
        if (filterByColors.length > 0) {
          filteredData = data.filter(data => filterByColors.includes(data.category));
        }
        setData(filteredData);
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [order, filterByColors]);

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterByColors(prev => [...prev, value]);
    } else {
      setFilterByColors(prev => prev.filter(category => category !== value));
    }
  }

  const handleCartfun = (id) => {
    return axios.get(`http://localhost:8080/products/${id}`);
  };

  const addToCart = (ele) => {
    handleCartfun(ele.id)
      .then((res) => {
        setCartItems(res.data);
        return axios.post("http://localhost:8080/cart", res.data);
      })
      .then(() => {
        alert("Product Added Successfully");
        getData();
      })
      .catch((err) => console.log(err));
  };

  const getData = () => {
    setIsLoading(true);
    axios.get(`http://localhost:8080/cart`)
      .then((res) => setCartItems3(res.data))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedData = data.slice(startIndex, startIndex + pageSize);
// const addToCart = (ele) => {
//   // console.log(ele)
//   handleCartfun(ele.id) .then((res)=> setCartItems2(res.data))

//   async function handlePostData(){    
//   try {
//     let res= await fetch("http://localhost:8080/cart",{
//        method:"POST",
//            headers:{
//              'Content-Type' : 'application/json'
//            },
//            body:JSON.stringify(cartItems2)
//     });
  
//     alert("Product Added Successfuly")
//     // console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
//  }

//  handlePostData();
// getData()
//  }
 
 
  return (
    <>

    <Navbar/>

    {/* ---------------sort---by-----price------------------- */}
    
    <div className="all-product">
    <div className="side-bar" style={{padding:"10px"}}>
    <label>
        Sort by Price:
        <select value={order} onChange={(event) => setOrder(event.target.value)}>
          <option value="">Select by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </label>

      <br/>
      <Divider />
  <div style={{marginTop:"40px"}}>
    <label >
        Filter by Category
        <br />
        <input type="checkbox" id="Ayurvedic" name="Ayurvedic" value="Ayurvedic" checked={filterByColors.includes("Ayurvedic")} onChange={handleColorChange} />
        <label htmlFor="Ayurvedic">Ayurvedic</label>
        <br />

        <input type="checkbox" id="Suppliment" name="Suppliment" value="Suppliment" checked={filterByColors.includes("Suppliment")} onChange={handleColorChange} />
        <label htmlFor="Suppliment">Suppliment</label>
        <br />
        <input type="checkbox" id="Diabetes Care" name="Diabetes Care" value="Diabetes Care" checked={filterByColors.includes("Diabetes Care")} onChange={handleColorChange} />
        <label htmlFor="Diabetes Care">Diabetes Care</label>
        <br />
        <input type="checkbox" id="Covid Essentials" name="Covid Essentials" value="Covid Essentials" checked={filterByColors.includes("Covid Essentials")} onChange={handleColorChange} />
        <label htmlFor="Covid Essentials">Covid Essentials</label>
        <br />
        <input type="checkbox" id="Surgical" name="Surgical" value="Surgical" checked={filterByColors.includes("Surgical")} onChange={handleColorChange} />
        <label htmlFor="Surgical">Surgical</label>
        <br />
        <input type="checkbox" id="Eyewear" name="Eyewear" value="Eyewear" checked={filterByColors.includes("Eyewear")} onChange={handleColorChange} />
        <label htmlFor="Eyewear">Eyewear</label>
        <br />
        <input type="checkbox" id="Veterinary" name="Veterinary" value="Veterinary" checked={filterByColors.includes("Veterinary")} onChange={handleColorChange} />
        <label htmlFor="Veterinary">Veterinary</label>
        <br />


        
      </label>
      </div>


    </div>
    {/* ----------------------------------------------------------------------------------------------------- */}
    <div className="makeit">
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
  {data.map((ele) => (
    <Card key={ele.id} maxW='xs'>
      <CardBody>
        <Image
          src={ele.image}
          alt={ele.name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{ele.name}</Heading>

          <Text color='green.600' fontSize='1xl'>
         {ele.mkt}
          </Text>
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
        <ButtonGroup spacing='2'>

          <Button variant='ghost' colorScheme='blue' onClick={() => addToCart(ele)}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ))}
</Grid>
</div>
    {/* ----------------------------------------------------------------------------------------------------- */}
    {/* <div className='product'>
      {data.map((ele,ind)=>(
        <div  key={ind} className="elements">
        <img src={ele.avatar} alt="name"/>
        <p>{ele.title}</p>
        <p> Price - {ele.price}</p> 
        <button style={{backgroundColor:"gray"}} onClick={() => addToCart(ele)}>Add to cart</button>
        </div>
      ))}
    </div> */}
    {/* </div> */}



</div>
    <Footer/>
</>
  )
          
}


export default Product;