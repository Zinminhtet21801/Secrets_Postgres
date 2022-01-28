import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <Box >
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        // border="2px solid transparent"
        // boxShadow="0 0 0 3px rgba(66, 153, 225, 0.6);"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        aria-label={`Switch to ${text} mode`}
      />
    </Box>
  );
};

export default ThemeToggle;
