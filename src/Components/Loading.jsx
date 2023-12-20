import React from 'react'
import { Box, Skeleton,Stack} from "@chakra-ui/react";
import Navbar from '../Routes/Navbar';
function Loading() {
  return (
    <Box>
<Navbar />

<Stack data-cy="loading_indicator">
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
    </Box>
 
 

  )
}

export default Loading