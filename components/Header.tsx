import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ThemeToggle from "./ThemeToggle";
import NoteForm from "./NoteForm";

export interface HeaderProps {
  handleNoteCreate?: (note: note) => void;
}

const Header: React.SFC<HeaderProps> = ({ handleNoteCreate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex marginBottom={"30px"}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Heading
            as="h1"
            size="xl"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            _focus={{ boxShadow: "none", outline: "none" }}
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            Secrets App
          </Heading>
        </motion.div>

        <Spacer />

        <Box>
          <HStack>
            <HStack>
              <Button
                gap={2}
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                _hover={{ bgGradient: "linear(to-r, red.500, yellow.500)" }}
                variant="solid"
                size="sm"
                onClick={onOpen}
              >
                <AddIcon color="whiteAlpha.900" />
                <Text
                  display={["none", "inline", "inline"]}
                  color="whiteAlpha.900"
                >
                  Post new secret
                </Text>
              </Button>
            </HStack>

            <ThemeToggle />
          </HStack>
        </Box>
      </Flex>
      <NoteForm
        isOpen={isOpen}
        onClose={onClose}
        handleNoteCreate={handleNoteCreate}
      />
    </Box>
  );
};

export default Header;
