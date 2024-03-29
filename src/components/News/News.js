import React from "react";
import {
  Heading,
  Image,
  Flex,
  Box,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const NewsPage = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Box width="98%" maxWidth={"1550px"} padding="4">
        <Heading as="h1" mb="8" textAlign="center">
          Latest News Updates
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
                src="/assets/images/climate.jpg"
                alt="News 1"
                mb="4"
                borderRadius="md"
              />

              <Heading as="h2" size="lg" mb="2">
                Global Climate Summit
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb="4">
                Published on March 26, 2024
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.800">
                World leaders gather in Paris for the Global Climate Summit,
                aiming to tackle urgent environmental challenges and set
                ambitious targets for carbon emissions reduction. Discussions
                center around renewable energy investment, conservation efforts,
                and strategies to mitigate the impacts of climate change.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/innovation.jpeg"
                alt="News 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Tech Giants Unveil New Innovations
              </Heading>
              <Text
                fontSize={{
                  base: "sm",

                  md: "md",
                }}
                color="gray.600"
                mb="4"
              >
                Published on March 25, 2024
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.800">
                Silicon Valley's biggest players, including Apple, Google, and
                Amazon, reveal groundbreaking innovations at the annual Tech
                Expo. From cutting-edge AI advancements to revolutionary
                sustainability initiatives, these tech titans are shaping the
                future of technology and sustainability.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/space.png"
                alt="News 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Space Exploration Milestone
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb="4">
                Published on March 24, 2024
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }} color="gray.800">
                NASA celebrates a historic milestone as the Artemis mission
                successfully launches astronauts to the Moon for the first time
                in decades. This mission marks a significant step forward in
                humanity's quest to explore and inhabit celestial bodies beyond
                Earth.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/cyber.jpeg"
                alt="News 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Rising Concerns Over Cybersecurity
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb="4">
                Published on March 24, 2024
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }} color="gray.800">
                With cyberattacks on the rise, governments and corporations
                worldwide are ramping up efforts to bolster cybersecurity
                measures. Experts warn of the increasing sophistication of cyber
                threats and emphasize the importance of proactive defense
                strategies to safeguard sensitive data and critical
                infrastructure.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/health.png"
                alt="News 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Healthcare Breakthrough
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb="4">
                Published on March 24, 2024
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }} color="gray.800">
                Researchers announce a major breakthrough in the fight against a
                prevalent infectious disease, with a new vaccine showing
                promising results in clinical trials. The development offers
                hope for controlling the spread of the disease and potentially
                saving millions of lives globally.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box maxW="600px" mx="auto">
              <Image
                src="/assets/images/economy.jpg"
                alt="News 1"
                mb="4"
                borderRadius="md"
              />
              <Heading as="h2" size="lg" mb="2">
                Economic Recovery Efforts
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" mb="4">
                Published on March 24, 2024
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }} color="gray.800">
                Governments implement stimulus packages and economic recovery
                measures to revive struggling economies in the aftermath of the
                global pandemic. Initiatives focus on job creation, small
                business support, and infrastructure investment to spur growth
                and rebuild resilience in the face of ongoing challenges.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default NewsPage;
