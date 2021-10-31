import React from "react";
import Head from "next/head";
import { Box, Flex, Heading, Stack, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Container, Grid } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { gql, GraphQLClient } from "graphql-request";
import { useKeyboardEvent, useMediaQuery } from "@react-hookz/web";
import { motion } from "framer-motion";
import { ExternalLink } from "react-feather";
import GithubIcon from "simple-icons/icons/github";
import DevToIcon from "simple-icons/icons/devdotto";
import DribbbleIcon from "simple-icons/icons/dribbble";

import SimpleIcon from "../components/SimpleIcon";
import Project from "../components/Project";

const LINKS = [
  {
    url: "https://github.com/malcodeman",
    text: "GitHub",
    icon: <SimpleIcon size={16} path={GithubIcon.path} />,
  },
  {
    url: "https://dev.to/malcodeman",
    text: "DEV",
    icon: <SimpleIcon size={16} path={DevToIcon.path} />,
  },
  {
    url: "https://dribbble.com/malcodeman",
    text: "Dribbble",
    icon: <SimpleIcon size={16} path={DribbbleIcon.path} />,
  },
];
const WEBSITES = [
  {
    url: "https://www.resumebuilder.dev",
    name: "resumebuilder.dev",
    description: "Free resume builder for developers.",
  },
  {
    url: "https://www.botify.ai",
    name: "botify.ai",
    description: "A no-code platform for building conversation apps.",
  },
  {
    url: "https://bosnianswho.design",
    name: "bosnianswho.design",
    description: "Directory of accomplished Bosnians in the IT industry.",
  },
];
const ENDPOINT = "https://api.github.com/graphql";
const QUERY = gql`
  {
    user(login: "malcodeman") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              createdAt
              languages(first: 1) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

type props = {
  pinnedItems: {
    user: {
      pinnedItems: {
        totalCount: number;
        edges: {
          node: {
            id: number;
            name: string;
            description: string;
            url: string;
            createdAt: string;
            languages: {
              edges: {
                node: {
                  id: string;
                  name: string;
                };
              }[];
            };
          };
        }[];
      };
    };
  };
};

function Home(props: props) {
  const { pinnedItems } = props;
  const { setColorMode } = useColorMode();
  const isLargeDevice = useMediaQuery("only screen and (min-width: 80em)");
  const wavingHandEmojiProps = isLargeDevice
    ? { whileHover: { scale: 1.2, rotate: 22 } }
    : {};

  useKeyboardEvent("d", () => setColorMode("dark"), [], { event: "keyup" });
  useKeyboardEvent("l", () => setColorMode("light"), [], { event: "keyup" });

  return (
    <>
      <Head>
        <title>malcodeman.com</title>
      </Head>
      <Container maxWidth="container.xl">
        <Grid gridTemplateColumns={{ lg: "1fr 1fr" }} gridGap={{ lg: 20 }}>
          <Flex
            paddingY="6"
            flexDir="column"
            justifyContent="space-between"
            top={{ lg: "0" }}
            position={{ lg: "sticky" }}
            height={{ lg: "100vh" }}
          >
            <Box>
              <Heading mb="6" fontSize={{ base: "4xl", lg: "5xl" }}>
                Hello, I’m Amer Karamustafić.{" "}
                <motion.span
                  {...wavingHandEmojiProps}
                  style={{ display: "inline-flex" }}
                  whileTap={{ scale: 1.2, rotate: 22 }}
                >
                  👋
                </motion.span>
              </Heading>
              <Text mb="2" opacity="0.8">
                I’m a full-stack engineer working on fintech startup at{" "}
                <Link href="https://ministryofprogramming.com" isExternal>
                  Ministry of Programming
                </Link>
                . Currently living in Sarajevo, Bosnia and Herzegovina.
              </Text>
              <Text mb="2" opacity="0.8">
                I like running, hiking and writing code in dark theme.
              </Text>
            </Box>
            <Box>
              <Stack direction={["column", "row"]} spacing="2">
                {LINKS.map((item) => (
                  <Link key={item.url} href={item.url} isExternal>
                    <Button
                      href={item.url}
                      leftIcon={item.icon}
                      mr="2"
                      justifyContent={["flex-start", "center"]}
                      width={["100%", "auto"]}
                      rightIcon={<ExternalLink size={16} />}
                    >
                      {item.text}
                    </Button>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Flex>
          <Box paddingY="6">
            <Box as="section" marginBottom="6">
              <Heading mb="4" textTransform="uppercase" fontSize="md">
                Projects
              </Heading>
              <Grid gridGap="4" gridTemplateColumns={{ xl: "1fr 1fr" }}>
                {pinnedItems.user.pinnedItems.edges.map((item) => (
                  <Project
                    key={item.node.id}
                    url={item.node.url}
                    language={item.node.languages.edges[0]?.node.name}
                    name={item.node.name}
                    description={item.node.description}
                  />
                ))}
              </Grid>
            </Box>
            <Box as="section">
              <Heading mb="4" textTransform="uppercase" fontSize="md">
                Websites
              </Heading>
              <Grid gridGap="4" gridTemplateColumns={{ xl: "1fr 1fr" }}>
                {WEBSITES.map((item) => (
                  <Project
                    key={item.url}
                    url={item.url}
                    language=""
                    name={item.name}
                    description={item.description}
                  />
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const graphQLClient = new GraphQLClient(ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });
  const pinnedItems = await graphQLClient.request(QUERY);
  return {
    props: {
      pinnedItems,
    },
  };
}

export default Home;
