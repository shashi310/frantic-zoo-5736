
import { Navigate,useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const isAuth=JSON.parse(localStorage.getItem("MedUserData"))||""
  const location= useLocation()
  console.log(`location-->`,location);


if(!isAuth){
  return <Navigate state={location.pathname} to="/login" replace={true} />
}
return children
};
