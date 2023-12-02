"use client";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BookView({url} : {url : string}) {
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
			<Paper elevation={24} sx={{width: "95%", height: "100%"}}>
			<Box sx={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth", width: "100%", height: "100%" }}>
				<Image
					alt="Book cover"
					src={url}
					width={640}
					height={860}	
					/>
			  	<Image
				  	alt="Book cover"
				  	src={url.substring(0,url.lastIndexOf("."))+"_2"+url.substring(url.lastIndexOf("."))}
				  	width={640}
				  	height={860}	
				/>
				<Image
				  	alt="Book cover"
				  	src={url.substring(0,url.lastIndexOf("."))+"_3"+url.substring(url.lastIndexOf("."))}
				  	width={640}
				  	height={860}	
				/>
			</Box>
			</Paper>
		</motion.div>
	  );
}
