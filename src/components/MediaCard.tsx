"use client";
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';

export default function MediaCard({id, heading, text, url, info, author, publisher, comment} : BookInfo) {
  return (
    <motion.div 
    initial="hidden" animate="visible" variants={{
      hidden: {
        scale: 0.8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.3,
          type: "spring", 
          stiffness: 100
      }
      },
    }}>
    <motion.div     whileHover={{
      scale: 1.05
    }}>
    <Paper elevation={12} >
      <Card>
        <Image
          alt="Book cover"
          src={url}
          width={640}
          height={480}
          style={{
            maxWidth: '100%',
            height: '350px',
            objectFit: 'cover',
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {heading}
          </Typography>
          <Typography gutterBottom variant="h6">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Год издания:</b> {info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Издательство</b>: {publisher}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" color="primary" sx={{ ml: 1, mb: 1 }} href={`/${id}`}>Подробнее</Button>
        </CardActions>
      </Card>
    </Paper>
    </motion.div>
    </motion.div>
  );
}
