"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";


export default function AnimatedText({baseText} : {baseText: string}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
	baseText.slice(0, latest)
  );

  useEffect(() => {
	const controls = animate(count, baseText.length, {
	  type: "tween",
	  duration: 5,
	  ease: "easeInOut",
	});
	return controls.stop;
  }, []);

  return (
	<>
	  <motion.span>{displayText}</motion.span>
	  <CursorBlinker />
	</>
  );
}