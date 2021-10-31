import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";

type props = {
  url: string;
  language: string;
  name: string;
  description: string;
};

function Project(props: props) {
  const { url, language, name, description, ...rest } = props;
  const bg = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-whiteAlpha-200)"
  );
  const isLargeDevice = useMediaQuery("only screen and (min-width: 80em)");
  const boxProps = isLargeDevice ? { whileHover: { scale: 1.1 } } : {};
  return (
    <Link
      {...rest}
      href={url}
      isExternal
      _hover={{
        textDecoration: "none",
      }}
    >
      <Box
        {...boxProps}
        as={motion.div}
        whileTap={{ scale: 0.9 }}
        bg={bg}
        padding="4"
        borderRadius="md"
        height="100%"
      >
        <Text textTransform="uppercase">{language}</Text>
        <Heading>{name}</Heading>
        <Text opacity="0.8">{description}</Text>
      </Box>
    </Link>
  );
}

export default Project;
