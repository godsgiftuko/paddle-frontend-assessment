import { TextField, Box, Stack, Grid, FormControl, Typography } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../LayoutElements';

const InputDiv = styled(Box)`
  @media screen and (min-width: 768px) {
	width: 40%;
  border-radius: 51px;
	background: #FFF;
	borderRadius: 51px;

    }
`;

const Clip = styled(Stack)`
	background: #FFF;
	fontSize: 30px;
	color: #000000;
	border-radius: 15px;
	height: 150px;
	width: 140px;
	@media screen and (max-width: 768px) {
	  	height: 100px;
	  	background: none;
    }
`;

const MomentList = styled(Stack)`
		{$props => props}
		@media screen and (max-width: 768px) {
		  	// height: 100px;
	    }
`;

const Moment = styled('div')`
		color: #000000;
		textTransform: capitalize;
	  	flex-direction: column;
	  	justify-content: center;
	  	align-items: center;
	  	display: flex;
	  	padding: 0 10px;
	  	border-radius: 10px;
		@media screen and (min-width: 768px) {
		  	background: #FFF;
		  	// height: 100px;
	    }
`;

const MomentItem = styled('span')`
	color: #000000;
	display: block;
	text-transform: capitalize;
	font-size: 18px;
	text-align: center;
	flex-basis: min-content;

	&:first-child {
		font-weight: bold;
	}

	@media screen and (max-width: 768px) {
		&:nth-child(2) {
			// font-size: 18px;
			color: red;
		}
		// font-size: 20px;
	  	height: 50px;
	  	width: 2em;
	  	background: none;
    }
`;


const ClipList = () => (
	
	<MomentList spacing={1} direction="row">
		<Moment>
	    	<MomentItem>7</MomentItem>
	    	<MomentItem>days</MomentItem>
	    </Moment>
	    <Moment>
	    	<MomentItem>7</MomentItem>
	    	<MomentItem>days</MomentItem>
	    </Moment>
	    <Moment>
	    	<MomentItem>7</MomentItem>
	    	<MomentItem>days</MomentItem>
	    </Moment>
	    <Moment>
	    	<MomentItem>7</MomentItem>
	    	<MomentItem>days</MomentItem>
	    </Moment>
	</MomentList>
);


export default function Subscribe() {
	return (
		<Box
		      component="div"
		      sx={{
		        '& .MuiTextField-root': { m: 1, width: '25ch' },
		      }}
		      noValidate
		      autoComplete="off"
		      display="flex"
		      justifyContent="center"
		      alignContent="center"
		      alignItems="center"
		      flexDirection="column"
	    >	
	    
	    	<ClipList />
	    </Box>
	);
}