import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      style={{ width: "100%", textAlign: "center" }}
    >
      <motion.div>
        <motion.span style={{ fontSize: "1.5rem" }}>
          Made with 🧡 by
        </motion.span>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0, }}
          transition={{ duration: 2, type : "spring", stiffness : 40 }}
          whileHover={{ x : 10 }}
        >
          <Text
          display={"inline"}
            fontSize="2xl"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            _focus={{ boxShadow: "none", outline: "none" }}
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            {"  "}Zeke
          </Text>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
