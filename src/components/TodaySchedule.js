import { Box, Text, Image, Grid, Heading} from "@chakra-ui/react";
import React from "react";

const TodaySchedule = ({programsByDay}) => {
  const getCurrentDayPrograms = () => {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    return programsByDay[currentDay] || [];
  };

  return (
    <Box p={4}>
    <Heading>Todys' Programs</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {getCurrentDayPrograms().map(program => (
          <Box key={program.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={program.imageUrl} alt={program.programName} />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold" mb={2}>{program.day}</Text>
              <Text fontSize="lg" mb={2}>{program.programName}</Text>
              <Text fontSize="md" color="gray.500">{program.time}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TodaySchedule;
