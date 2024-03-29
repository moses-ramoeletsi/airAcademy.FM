import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, Text } from "@chakra-ui/react";

const NewsModal = ({ isOpen, onClose, newsItem }) => {
    if (!newsItem) {
        return null;
      }
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight={'800'}>{newsItem.heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={newsItem.imageUrl} alt={newsItem.heading} mb="4" />
          {isOpen && (
            <Text fontSize="lg" color="gray.800" textAlign={'justify'}>
              {newsItem.description}
            </Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewsModal;
