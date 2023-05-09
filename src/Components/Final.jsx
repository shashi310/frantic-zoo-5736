import React from "react";
import { Center,Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Final = () => {
    
    return (
        <Center height="100vh">
        <Box
          bg="green.50"
          border="2px solid"
          borderColor="green.200"
          borderRadius="lg"
          p={6}
        >
          <Flex align="center">
            <Icon
              as={FaCheckCircle}
              boxSize={8}
              color="green.500"
              mr={4}
              animate={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />
            <Text fontWeight="bold" fontSize="xl">
              Thank you! Your Order has been placed!
            </Text>
            <Box h="10px" />
          </Flex>
        </Box>
      </Center>
      );
};

export default Final;

