"use client";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function InfoAlert() {
	const hello_text = "Тут я храню свою небольшую коллекцию антикварных книг для чтения всех интересующихся в электронном формате";
	
  	return (
		<motion.div initial="hidden" animate="visible" variants={{
	  	hidden: {
			scale: .8,
			opacity: 0
	  	},
	  	visible: {
			scale: 1,
			opacity: 1,
			transition: {
		  		delay: 0,
				type: "spring", 
				stiffness: 100
			}
	  	},
		}}>
	  	<Alert severity="info" sx={{ mt: 2, mb: 5 }}>
			<AlertTitle>Привет 👋</AlertTitle>
			<AnimatedText baseText={hello_text}/>
	  	</Alert>
		</motion.div>
  	);
}
