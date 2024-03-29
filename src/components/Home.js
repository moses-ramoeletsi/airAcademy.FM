import React, { useState } from "react";
import Footer from "./Footer/Footer";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import TodaySchedule from "./Schedule/TodaySchedule";
import programsByDay from "../data/Programs";
import NewsHomePage from "./News/NewsImagePage";
import AdvertisementPage from "./Advertising/AdvertisingImagePage";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleplayLive = () => {
    setIsPlaying(!isPlaying);
  };

  const currentDate = new Date();

  return (
    <Box>
      <Flex direction="column" align="center" justify="center">
        <Box padding={4} width={"98%"} maxWidth={'1550px'}>
          <Box p={4}>
            <Center
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Img
                src="./assets/images/icon.png"
                alt="Radio Icon"
                boxSize="300px"
              />
              <VStack
                p={3}
                ml={{ base: 0, md: 6 }}
                textAlign={{ base: "center", md: "left" }}
              >
                <Button
                  onClick={toggleplayLive}
                  colorScheme={isPlaying ? "red" : "blue"}
                  size="lg"
                >
                  {isPlaying ? "Pause" : "Play"} Live Stream
                </Button>
                <Text>Time: 80:00</Text>
              </VStack>
            </Center>
          </Box>
          <Box p={6}>
            {isPlaying && (
              <Center>
                <audio
                  controls
                  autoPlay
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <source
                    src="https://media-ssl.musicradio.com/HeartUK"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </Center>
            )}
          </Box>
          <TodaySchedule  currentDate={currentDate} programsByDay={programsByDay} />
          <Box padding={2}>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
              gap={2}
            >
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <NewsHomePage />
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <AdvertisementPage />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;
