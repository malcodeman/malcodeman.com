import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

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
  return (
    <Link
      {...rest}
      src={url}
      isExternal
      _hover={{
        textDecoration: "none",
      }}
    >
      <Box bg={bg} padding="4" borderRadius="md">
        <Text textTransform="uppercase">{language}</Text>
        <Heading>{name}</Heading>
        <Text>{description}</Text>
      </Box>
    </Link>
  );
}

export default Project;
