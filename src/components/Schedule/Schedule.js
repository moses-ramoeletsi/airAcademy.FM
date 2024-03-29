import {
  Box,
  Grid,
  Text,
  Image,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Schedule = ({ programsByDay }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return (
      <Box p={2} overflowX="auto">
        <Table variant="simple" w="full" maxW="100%">
          <Tbody>
            {Object.keys(programsByDay).map((day) => (
              <Tr key={day}>
                <Th>{day}</Th>
                {programsByDay[day].map((program) => (
                  <Td key={program.id}>
                    <Grid
                      templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
                      gap={4}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        padding={4}
                        textAlign="center"
                      >
                        <Image
                          src={program.imageUrl}
                          alt={program.programName}
                        />
                        <Text fontSize="lg" mt={2}>
                          {program.programName}
                        </Text>
                        <Text fontSize="md" color="gray.500">
                          {program.time}
                        </Text>
                      </Box>
                    </Grid>
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <Box p={4} overflowX="auto" width={"98%"}>
        <Table variant="simple" w="full" maxW="100%">
          <Thead>
            <Tr>
              {Object.keys(programsByDay).map((day) => (
                <Th key={day}>{day}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {Object.keys(programsByDay).map((day) => (
                <Td key={day}>
                  <Grid
                    templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
                    gap={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {programsByDay[day].map((program) => (
                      <Box
                        key={program.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        padding={4}
                        textAlign="center"
                      >
                        <Image
                          src={program.imageUrl}
                          alt={program.programName}
                        />
                        <Text fontSize="lg" mt={2}>
                          {program.programName}
                        </Text>
                        <Text fontSize="md" color="gray.500">
                          {program.time}
                        </Text>
                      </Box>
                    ))}
                  </Grid>
                </Td>
              ))}
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Schedule;
