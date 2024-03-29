import React, { useState, useRef } from "react";
import { Heading, Flex, Box, AspectRatio, Link, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AdvertModel from "../../Model/advertModel";
import advertisingData from "../../data/AdvetisingData";

const AdvertisementPage = () => {
  const [selectedAdvertItem, setSelectedAdvertItem] = useState(null);
  const [isAdvertModalOpen, setIsAdvertModalOpen] = useState(false);
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handleAdvertItemClick = (advertItem) => {
    setSelectedAdvertItem(advertItem);
    setIsAdvertModalOpen(true);
  };

  const closeModal = () => {
    setIsAdvertModalOpen(false);
  };

  const arrowSize = useBreakpointValue({ base: 24, sm: 32 });

  return (
    <Flex direction="column" align="center" justify="center">
      <Box width="98%" padding="4" position="relative">
        <Heading as="h1" mb="8" textAlign="center">
          Latest News Updates
        </Heading>
        <Slider ref={sliderRef} {...sliderSettings}>
          {advertisingData.map((advertItem, index) => (
            <Box key={index} textAlign="center">
              <Link
                as="div"
                onClick={() => handleAdvertItemClick(advertItem)}
                cursor="pointer"
              >
                <AspectRatio ratio={16 / 9} maxWidth="100%">
                  <Box
                    as="img"
                    src={advertItem.imageUrl}
                    alt={`Advertisement ${index + 1}`}
                    objectFit="cover"
                    borderRadius="md"
                    maxWidth="100%"
                    height="100%"
                  />
                </AspectRatio>
                <Heading as="h2" size="lg" mb="2" cursor="pointer">
                  {advertItem.heading}
                </Heading>
              </Link>
            </Box>
          ))}
        </Slider>
        <IoIosArrowBack
          onClick={handlePrevSlide}
          size={arrowSize}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            left: "-10px",
            zIndex: 1,
          }}
        />
        <IoIosArrowForward
          onClick={handleNextSlide}
          size={arrowSize}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            right: "-10px",
            zIndex: 1,
          }}
        />
        <AdvertModel
          isOpen={isAdvertModalOpen}
          onClose={closeModal}
          advertItem={selectedAdvertItem}
        />
      </Box>
    </Flex>
  );
};

export default AdvertisementPage;
