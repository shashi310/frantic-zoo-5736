import { Box ,Text,Grid,Card,CardBody,Image,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react";
function Pagination({totalPages, handlePageChange,currentPage}) {
  return new Array(totalPages).fill(0).map((a,i)=>{
    return(
      <Button  data-testid="page-btn" disabled={currentPage===i+1} style={{backgroundColor: currentPage===i+1 ?"red" :"aliceBlue"}} onClick={()=>handlePageChange(i+1)}>{i+1}</Button>
    )
  })
}

export default Pagination;

