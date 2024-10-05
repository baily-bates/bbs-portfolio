import React from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <Box>
      /*{' '}
      <Box
        bg="black"
        h="200px"
        w="100vw"
        position="fixed"
        top="0"
        left="0"
        ml="0px"
      >
        <Heading color="white" textAlign="center" fontSize="35px" mt="60px">
          Look what Chakra can do
        </Heading>
      </Box>
      <Box mt="200px">
        <Image
          src="https://images.unsplash.com/photo-1575881875475-31023242e3f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          h="300px"
          w="70vh"
          ml="90px"
        />
      </Box>
      <Text textAlign="center" fontSize="2rem" mt="40px">
        This is for my Chakra Tutorial
      </Text>
      <Box
        mt="50px"
        bg="gray"
        h="200px"
        w="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        left="300px"
        mt="30px"
      >
        <FormControl>
          <Flex
            direction="column"
            gap="4"
            justifyContent="center"
            alignItems="center"
            mb="30"
          >
            <Input placeholder="firstname" />
            <Input placeholder="lastname" />
            <Input placeholder="email" />
            <Flex
              direction="row"
              gap="4"
              justifyContent="center"
              alignItems="center"
            >
              <FormLabel>age:</FormLabel>
              <NumberInput w="100px" defaultValue="20px" min="0" max="100">
                <NumberInputField />
              </NumberInput>
            </Flex>
          </Flex>
        </FormControl>
        <Flex position="fixed" bottom="150px">
          <Button bg="orange">Submit</Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
