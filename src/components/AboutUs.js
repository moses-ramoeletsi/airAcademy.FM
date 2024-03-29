import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Stack,
  HStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Box padding={[4, 8]} width={"98%"}>
        <Heading as="h1" size="xl" mb={8} textAlign="center">
          About Us
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          mb={8}
        >
          <GridItem>
            <HStack spacing={8} alignItems="flex-start">
              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Our Mission
                </Heading>
                <Text textAlign="justify">
                  To serve as the premier platform for aviation enthusiasts and
                  professionals alike, Air Academy FM is committed to delivering
                  informative, engaging, and entertaining content that
                  celebrates the wonder of flight. Through our radio broadcasts,
                  we aim to inspire, educate, and unite individuals passionate
                  about aviation, fostering a community dedicated to the
                  exploration and advancement of aerospace knowledge.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Our Vision
                </Heading>
                <Text textAlign="justify">
                  Air Academy FM envisions a world where the skies are not just
                  pathways, but sources of boundless inspiration and learning.
                  We aspire to be the beacon guiding enthusiasts, students, and
                  professionals through the intricate world of aviation,
                  providing a platform where dreams take flight and where the
                  wonders of the aerospace industry are shared with a global
                  audience. By embracing innovation and collaboration, we strive
                  to be the foremost destination for aviation education,
                  entertainment, and camaraderie, elevating the appreciation for
                  flight in all its forms.
                </Text>
              </Box>
            </HStack>
          </GridItem>
          <GridItem>
            <Box>
              <Heading as="h2" size="lg" mb={4} textAlign="center">
                Station Background
              </Heading>
              <Text textAlign="justify">
                Station Background: Air Academy FM was founded in [2023] with
                the aim of filling a significant gap in the media landscape: a
                dedicated radio station focused solely on aviation. From its
                humble beginnings as a passion project, Air Academy FM has grown
                into a reputable broadcasting platform, reaching audiences
                across the globe. Our programming covers a diverse range of
                topics, including aviation history, technology, safety, career
                insights, and inspiring stories from within the aviation
                industry. Whether you're a seasoned pilot, an aviation
                enthusiast, or simply curious about the world of flight, Air
                Academy FM offers something for everyone.
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Center mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Air Academy Founder
          </Heading>
        </Center>
        <Card borderRadius="xl" boxShadow="lg">
          <Stack direction={{ base: "column", md: "row" }} spacing={6} p={6}>
            <Image
              src="/assets/images/Founder.jpg"
              alt="Founder Image"
              boxSize={{ base: "100%", md: "200px" }}
              objectFit="cover"
              borderRadius="lg"
            />
            <Stack>
              <Heading as="h3" size="lg">
                Mr. Reanetse M Ramoletsi
              </Heading>
              <Text textAlign="justify">
                Reanetse M Ramoeletsi, a visionary aviation enthusiast, is the
                driving force behind the establishment of Air Academy FM. With a
                lifelong passion for flight and a background in media and
                communications, Reanetse recognized the need for a dedicated
                radio station that caters to aviation enthusiasts worldwide.
                Drawing upon their expertise in broadcasting and their deep love
                for aviation, Reanetse embarked on a mission to create a
                platform where people could not only learn about aviation but
                also feel inspired and connected to the vast and exhilarating
                world of flight. Through their leadership and unwavering
                dedication, Reanetse has guided Air Academy FM to become a
                leading voice in aviation broadcasting, enriching the lives of
                listeners around the globe.
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Flex>
  );
};

export default AboutUs;
