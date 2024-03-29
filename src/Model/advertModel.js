import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from "@chakra-ui/react";

const AdvertModel = ({ isOpen, onClose, adverItem }) => {
  if (!adverItem) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight={"800"}>{adverItem.heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={adverItem.imageUrl} alt={adverItem.heading} mb="4" />
          {isOpen && (
            <Text fontSize="lg" color="gray.800" textAlign={"justify"}>
              {adverItem.description}
            </Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AdvertModel;
