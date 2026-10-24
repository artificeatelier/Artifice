import React from "react";
import { motion } from "framer-motion";

// Fade + slide-up on scroll into view. Reused across sections instead of
// repeating the same variant/viewport config at every call site.
const Reveal = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
