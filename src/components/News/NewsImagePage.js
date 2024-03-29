import React, { useState, useRef } from "react";
import { Heading, Flex, Box, AspectRatio, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsModal from './../../Model/newsModel';
import newsData from "../../data/newsData";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const NewsHomePage = () => {
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleNewsItemClick = (newsItem) => {
    setSelectedNewsItem(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Box width="98%" padding="4" position="relative">
        <Heading as="h1" mb="8" textAlign="center">
          Latest News Updates
        </Heading>
        <Slider ref={sliderRef} {...sliderSettings}>
          {newsData.map((newsItem, index) => (
            <Box key={index} textAlign="center">
              <Link
                as="div"
                onClick={() => handleNewsItemClick(newsItem)}
                cursor="pointer"
              >
                <AspectRatio ratio={16 / 9} maxWidth="100%">
                  <Box
                    as="img"
                    src={newsItem.imageUrl}
                    alt={`News ${index + 1}`}
                    objectFit="cover"
                    borderRadius="md"
                    maxWidth="100%"
                    height="100%"
                  />
                </AspectRatio>
                <Heading
                  as="h2"
                  size="lg"
                  mb="2"
                  cursor="pointer"
                >
                  {newsItem.heading}
                </Heading>
              </Link>
            </Box>
          ))}
        </Slider>
        <IoIosArrowBack
          onClick={handlePrevSlide}
          size={32}
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
          size={32}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            right: "-10px",
            zIndex: 1,
          }}
        />
        <NewsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          newsItem={selectedNewsItem}
        />
      </Box>
    </Flex>
  );
};

export default NewsHomePage;
