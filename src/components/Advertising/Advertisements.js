import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const AdvertisementPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Box width="98%" maxWidth={"1550px"} padding="4">
        <Heading as="h1" mb="8" textAlign="center">
          Advertisement Page
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/spare.jpeg"
                alt="Brand 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Harmony Haven Spa Retreat
              </Heading>
              <Text>
                A luxurious spa retreat nestled in the serene countryside,
                offering rejuvenating massages, organic facials, and holistic
                wellness experiences. Unwind in our tranquil gardens and indulge
                in our gourmet healthy cuisine. Escape the hustle and bustle of
                everyday life at Harmony Haven Spa Retreat.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/fitness.jpg"
                alt="Brand 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Peak Performance Fitness
              </Heading>
              <Text>
                Elevate your fitness journey with Peak Performance Fitness,
                where we're dedicated to helping you reach your peak potential.
                From personalized training programs to group fitness classes and
                nutrition coaching, we're here to support your goals every step
                of the way. Experience the difference at Peak Performance
                Fitness.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/eats.jpg"
                alt="Brand 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Eco-Eats Organic Market
              </Heading>
              <Text>
                Discover a world of fresh, sustainable, and locally sourced
                produce at Eco-Eats Organic Market. From farm-fresh fruits and
                vegetables to artisanal cheeses and homemade baked goods, we're
                committed to nourishing our community and the planet. Shop
                consciously at Eco-Eats Organic Market today.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/pets.jpeg"
                alt="Brand 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Paws & Play Pet Paradise
              </Heading>
              <Text>
                Treat your furry friends to a paradise of pampering and play at
                Paws & Play Pet Paradise. Our state-of-the-art facilities offer
                daycare, grooming, and overnight boarding services, ensuring
                your pets receive the love and care they deserve while you're
                away. Trust Paws & Play Pet Paradise for all your pet care
                needs.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/soulful.png"
                alt="Brand 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Soulful Sounds Music Academy
              </Heading>
              <Text>
                Unleash your musical talents at Soulful Sounds Music Academy.
                Whether you're a beginner or a seasoned musician, our expert
                instructors offer lessons in a variety of instruments and
                genres. Experience the joy of music at Soulful Sounds Music
                Academy.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/green.jpeg"
                alt="Brand 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                GreenTech Solutions
              </Heading>
              <Text>
                Embrace sustainability with GreenTech Solutions, your trusted
                partner for eco-friendly solutions. From solar energy systems
                and energy-efficient appliances to smart home automation, we're
                committed to helping you reduce your carbon footprint and save
                on utility costs. Go green with GreenTech Solutions today.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default AdvertisementPage;
