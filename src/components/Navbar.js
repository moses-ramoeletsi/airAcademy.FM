import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navLink = useNavigate();
  return (
    <Flex 
        as="nav"
        align="center"
        justifyContent="space-between"
        padding="1rem"
        background="#130f2b"
    >
    <Box>
    <Heading as="h1" size="lg" letterSpacing={"tighter"} textColor={"white"}>
            Air Academy FM
          </Heading>
    </Box>
    <Stack
        direction={"row"}
        display="flex"
        width="full"
        alignItems="center"
        marginTop="4"
        justifyContent="center"
        textColor={"white"}
        flexGrow={1}
        fontSize="2rem"
    >
        <Text onClick={() => navLink('/home')}>Home</Text>
        <Text  onClick={() => navLink('/schedule')}>Schedule</Text>
        <Text onClick={() => navLink('/news')}>News</Text>
        <Text onClick={() => navLink('/advertisement')}>Advertisement</Text>
        <Text onClick={() => navLink('/about-us')}>About Us</Text>
        <Text onClick={() => navLink('/contacts')}>Contacts</Text>
    </Stack>

    </Flex>
  )
}

export default Navbar