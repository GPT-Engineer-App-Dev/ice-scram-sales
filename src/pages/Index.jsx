import { Container, Box, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaIceCream } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Ice Cream Delight
          </Heading>
          <Text fontSize="xl" mb={6}>
            The best ice cream in town, made with love and the finest ingredients.
          </Text>
          <Button colorScheme="teal" size="lg" leftIcon={<FaIceCream />}>
            Order Now
          </Button>
        </Box>
        <Box>
          <Image src="/images/ice-cream-banner.jpg" alt="Ice Cream Banner" borderRadius="md" />
        </Box>
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Our Flavors
          </Heading>
          <Text fontSize="lg" mb={6}>
            From classic vanilla to exotic mango, we have a flavor for everyone.
          </Text>
        </Box>
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Visit Us
          </Heading>
          <Text fontSize="lg" mb={6}>
            Come and enjoy our ice cream at our cozy shop located in the heart of the city.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;