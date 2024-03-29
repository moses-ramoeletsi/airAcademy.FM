import React, { useState } from "react";
import { Box, Text, Image, Heading, IconButton, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const TodaySchedule = ({ programsByDay }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const scrollContainerRef = React.useRef(null);

  const getCurrentDayPrograms = () => {
    const currentDay = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
    return programsByDay[currentDay] || [];
  };

  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDayAndDate = currentDate.toLocaleDateString("en-US", options);

  const handleScroll = (scrollOffset) => {
    const container = scrollContainerRef.current;
    container.scrollLeft += scrollOffset;
    setScrollPosition(container.scrollLeft);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed
    scrollContainerRef.current.scrollLeft = scrollPosition - walk;
  };

  return (
    <Box p={4}>
      <Heading>Todays' Programs - {currentDayAndDate}</Heading>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginTop={4}
        marginBottom={4}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          onClick={() => handleScroll(-200)} // Adjust scroll offset as needed
          disabled={scrollPosition === 0}
        />
        <Box
          ref={scrollContainerRef}
          overflowX="auto"
          whiteSpace="nowrap"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {getCurrentDayPrograms().map((program) => (
            <Box
              key={program.id}
              display="inline-block"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              marginRight={4} // Adjust spacing between programs
              width="250px" // Adjust program card width
            >
              <Image src={program.imageUrl} alt={program.programName} />
              <Box p={4}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {program.day}
                </Text>
                <Text fontSize="lg" mb={2}>
                  {program.programName}
                </Text>
                <Text fontSize="md" color="gray.500">
                  {program.time}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          onClick={() => handleScroll(200)} // Adjust scroll offset as needed
        />
      </Flex>
    </Box>
  );
};

export default TodaySchedule;
