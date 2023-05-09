
import axios from "axios"
import { useEffect, useReducer } from "react";



const getData= (url)=>{
    return axios.get(url)
}

const initState={
    loading:false,
    data:[],
    err:false,
}

const reducer= (state,action) =>{
    switch(action.type){

        case  "FETCH_LOADING" :{
            return {
                loading:true,
                err:false,
                data:[],
            }
        }
        case  "FETCH_SUCCESS" :{
            return {
                loading:false, 
                err:false,
                data:action.payload,
            }
        }
        case  "FETCH_ERROR" :{
            return {
                loading:false,
                err:true,
                data:[],
            }
        }

        default :{
            throw new Error(`Invalid action type`)
        }
    }
};


function Restaurent (){
const [state,dispatch] =useReducer (reducer,initState)

// console.log(state)


const fetchAndUpdateData = async (url)=>{
    try {
        // set laoding to true
        dispatch({type:"FETCH_LOADING"})
        let res = await getData(url)
            // console.log(res);
            console.log(res?.data);
            // update data
            // set loading to false
        dispatch({type:"FETCH_SUCCESS",payload:res?.data})
        
    } catch (err) {
        // console.log(err)
        // set err state to false
    dispatch({type:"FETCH_ERROR"})
    }
}

useEffect (()=>{
fetchAndUpdateData(`http://localhost:8080/products`)
},[])


const{loading,err,data} =state
// console.log(data);

return loading ? (
    <h1>Loading...</h1>
) : err ? (
    <h1>Something went wrong..</h1>
) : (
    <>
    {
        data.map((restaurent)=> (
            <div key={restaurent.id}>{restaurent.name}</div>
        ))
    }
    </>
)
}
export default Restaurent;
// get the data using axios

