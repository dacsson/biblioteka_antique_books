import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import InfoAlert from '../components/InfoAlert'
import MediaCard from '@/components/MediaCard';
import { promises as fs } from 'fs';

export default async function HomePage() {
  
  const file = await fs.readFile(process.cwd() + '/books.json', 'utf8');
  const data = JSON.parse(file);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <InfoAlert />
        <Grid container rowSpacing={3} columnSpacing={3}>
          {
            data.books.map(({id, heading, text, url, info, author, publisher, comment} : BookInfo) => {
              return (
                <Grid xs={4} key={id}>
                <MediaCard
                  id={id}
                  heading={heading}
                  text={text}
                  url={url}
                  info={info}
                  author={author}
                  publisher={publisher}
                  comment={comment}
                />
                </Grid>
              )
            })
          }            
        </Grid>
      </div>
    </Box>
  );
}
