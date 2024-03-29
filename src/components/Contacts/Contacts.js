import { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Stack,
  Link,
  Icon,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Card,
} from "@chakra-ui/react";
import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Box padding={4} width={"98%"} maxWidth={'1550px'}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: 4, md: 8 }}
          padding={4}
        >
          <Box>
            <Box marginBottom={{ base: 8, md: 0 }}>
              <Heading as="h2" size="lg" marginBottom={4} textAlign="center">
                Contact Information
              </Heading>
              <Image
                src="/assets/images/icon.png"
                alt="Air Academy FM Logo"
                mx="auto"
                w={{ base: "50%", md: "32%" }}
                borderRadius={50}
              />
              <Box boxShadow="md" padding={4} borderRadius="md">
                <Stack spacing={4}>
                  <Flex alignItems="center">
                    <Icon as={FaMapMarker} boxSize={6} color="blue.500" />
                    <Text ml={4}>
                      Qoaling, <br />
                      Maseru 100, <br />
                      Lesotho
                    </Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FaPhone} boxSize={6} color="blue.500" />
                    <Text ml={4}>+266 56121920</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={FaEnvelope} boxSize={6} color="blue.500" />
                    <Text ml={4}>info@airacademyfm.com</Text>
                  </Flex>
                </Stack>
              </Box>
            </Box>

            <Flex justifyContent="center" mt={10}>
              <Link href="#" mx={2}>
                <Icon as={FaWhatsapp} boxSize={8} color="green.500" />
              </Link>
              <Link href="#" mx={2}>
                <Icon as={FaFacebook} boxSize={8} color="blue.600" />
              </Link>
              <Link href="#" mx={2}>
                <Icon as={FaTelegram} boxSize={8} color="blue.400" />
              </Link>
              <Link href="#" mx={2}>
                <Icon as={FaTwitter} boxSize={8} color="blue.400" />
              </Link>
            </Flex>
          </Box>

          <Box padding={4}>
            <Card padding={4} borderRadius="lg" boxShadow="md">
              <Heading as="h2" size="lg" marginBottom={4} textAlign="center">
                Get in Touch
              </Heading>
              <Text fontSize="lg" marginBottom={4}>
                Have a question or suggestion? Feel free to get in touch with us
                using the form below. We'll get back to you as soon as possible!
              </Text>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={4}
                  >
                    <GridItem>
                      <FormControl id="firstName">
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your First Name"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your Last Name"
                        />
                      </FormControl>
                    </GridItem>
                  </Grid>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={4}
                  >
                    <GridItem>
                      <FormControl id="email">
                        <FormLabel>Email Address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email Address"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem>
                      <FormControl id="phone">
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone Number"
                        />
                      </FormControl>
                    </GridItem>
                  </Grid>

                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="blue">
                    Submit
                  </Button>
                </Stack>
              </form>
            </Card>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default ContactPage;
