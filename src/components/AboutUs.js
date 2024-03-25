import { Box, Card, CardBody, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Box padding={4}>
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <Grid templateColumns="repeat(4 ,3fr)" gap={2}>
        <GridItem colSpan={2}>
          <Card>
            <CardBody>
              <Heading>Our Mission</Heading>
              <Text>
                "To serve as the premier platform for aviation enthusiasts and
                professionals alike, Air Academy FM is committed to delivering
                informative, engaging, and entertaining content that celebrates
                the wonder of flight. Through our radio broadcasts, we aim to
                inspire, educate, and unite individuals passionate about
                aviation, fostering a community dedicated to the exploration and
                advancement of aerospace knowledge."
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={2}>
          <Card>
            <CardBody>
              <Heading>Our Vision</Heading>
              <Text>
                "Air Academy FM envisions a world where the skies are not just
                pathways, but sources of boundless inspiration and learning. We
                aspire to be the beacon guiding enthusiasts, students, and
                professionals through the intricate world of aviation, providing
                a platform where dreams take flight and where the wonders of the
                aerospace industry are shared with a global audience. By
                embracing innovation and collaboration, we strive to be the
                foremost destination for aviation education, entertainment, and
                camaraderie, elevating the appreciation for flight in all its
                forms."
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>

      <Text fontSize="lg"></Text>
    </Box>
  );
};

export default AboutUs;
