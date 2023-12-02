import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AnimatedText from '../../components/AnimatedText';
import BookView from '../../components/BookView';
import { get_book_data_by_id } from '../../lib/books';

export default async function BookPage({ params }: { params: { book: string } }) {

	var book_data = await get_book_data_by_id(params.book);

  	return (
		<Container >
			<Grid container rowSpacing={3} columnSpacing={3} sx={{ mt: 2 }}>
		  		<Grid xs={7}>
	  				{/* <Image
					  	alt="Book cover"
					  	src={book_data.url}
					  	width={640}
					  	height={100}
					  	style={{
							maxWidth: '100%',
							height: '100%',
							objectFit: 'cover',
					  	}}
						/> */}
					<BookView url={book_data.url} />
		  		</Grid>
				<Grid xs={5}>
					<Typography variant="h4" component="div">
				  		<b>{book_data.heading}</b>
					</Typography>
					<Typography gutterBottom variant="h5">
				  		{book_data.author}
					</Typography>
					
					<Typography variant="h6" sx={{ mt: 2, border: "1px solid rgba(255, 255, 255, 0.08)", width: "fit-content", pl: 1, pr: 1, borderRadius: 5 }}>
						# Информация
					</Typography>
					<TableContainer component={Paper} sx={{ mt: 1 }} >
				  	<Table>
						<TableBody sx={{ backgroundColor: "" }}>
							<TableRow>
								<TableCell align="left" sx={{ border: "0", color: "gray" }}>Год издания</TableCell>
								<TableCell align="right" sx={{ border: "0" }}>{book_data.info}</TableCell>
							</TableRow>				
							<TableRow sx={{ border: "0" }}>
								<TableCell align="left" sx={{ border: "0", color: "gray" }}>Издательство</TableCell>
								<TableCell align="right" sx={{ border: "0" }}>{book_data.publisher}</TableCell>
							</TableRow>
						</TableBody>
				  	</Table>
					</TableContainer>
					<Typography variant="h6" sx={{ mt: 2, border: "1px solid rgba(255, 255, 255, 0.08)", width: "fit-content", pl: 1, pr: 1, borderRadius: 5 }}>
						# Заметка
					</Typography>
					<Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.08)", mt: 1, p: 2, borderRadius: 1 }}>
						<AnimatedText baseText={book_data.comment} />
					</Box>
				</Grid>    
			</Grid>
		</Container>
  	);
}


