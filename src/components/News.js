import { Box, Card, CardBody, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const News = () => {
  const newsLink = useNavigate();
  return (
    <Box padding={4}>
      <Heading>Top News</Heading>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        onClick={() => newsLink('/news')}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="./assets/images/logo.png"
        />
        <Stack>
          <CardBody>
            <Heading size="md">Air Academy Fm</Heading>
            <Text>
              The bese online live streaming radio in the coutry. Promote your
              business and brands with us at low prices
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  )
}

export default News