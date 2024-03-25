import { Box,Grid, Text, Image, Table, Thead, Tr, Tbody, Td, Th } from "@chakra-ui/react";
import React from "react";

const Schedule = ({programsByDay}) => {
  return (
   <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            {Object.keys(programsByDay).map(day => (
              <Th key={day}>{day}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>  
            {Object.keys(programsByDay).map(day => (
              <Td key={day}>
                <Grid templateRows="repeat(auto-fill, minmax(150px, 1fr))" gap={4}>
                  {programsByDay[day].map(program => (
                    <Box key={program.id} borderWidth="1px" borderRadius="lg" overflow="hidden" padding={4}>
                      <Image src={program.imageUrl} alt={program.programName} />
                      <Text fontSize="lg" mt={2}>{program.programName}</Text>
                      <Text fontSize="md" color="gray.500">{program.time}</Text>
                      </Box>
                   
                  ))}
                </Grid>
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
      
    </Box>

    
  );
};

export default Schedule;
