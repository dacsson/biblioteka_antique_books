"use cloient";
import { motion } from "framer-motion";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const cursorVariants = {
  blinking: {
	opacity: [0, 0, 1, 1],
	transition: {
	  duration: 1,
	  repeat: Infinity,
	  repeatDelay: 0,
	  ease: "linear",
	  times: [0, 0.5, 0.5, 1]
	}
  }
};

export default function CursorBlinker() {
  return (
	<motion.div
	  variants={cursorVariants}
	  animate="blinking"
	  style={{display: "inline-block", height: 15, width: 1, translateY: 1, backgroundColor: "#ffffff", marginLeft: 2}}
	/>
  );
}