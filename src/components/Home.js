import React, { useState } from 'react';
import { Footer } from './Footer';
import { Box, Button, Center, Grid, GridItem, Img, Text, VStack } from '@chakra-ui/react';
import TodaySchedule from './TodaySchedule';
import programsByDay from '../data/Programs';
import News from './News';
import Advertisements from './Advertisements';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleplayLive = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Box p={6}>
        <Center>
          <Img src="./assets/images/icon.png" alt="Radio Icon" boxSize="300px" />
          <VStack p={3}>
          <Button
            onClick={toggleplayLive}
            colorScheme={isPlaying ? 'red' : 'blue'}
            size="lg"
          >
            {isPlaying ? 'Pause' : 'Play'} Live Stream
          </Button>
          <Box>
          <Text>
            Time
            80:00
          </Text>

          </Box>
          </VStack>
        </Center>
      </Box>
      <Box p={6}>
        {isPlaying && (
          <Center>
            <audio controls autoPlay style={{ width: '100%', marginTop: '10px' }}>
              <source
                src="https://media-ssl.musicradio.com/HeartUK"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </Center>
        )}
      </Box>
      <TodaySchedule programsByDay={programsByDay}/>
      <Box padding={2}>
      <Grid templateColumns="repeat(4 ,3fr)" gap={2}>
      <GridItem colSpan={2}>
      <News />

      </GridItem>
      <GridItem colSpan={2}>
      
      <Advertisements />

      </GridItem>

      </Grid>

      </Box>
      <Footer />
    </>
  );
};

export default Home;
