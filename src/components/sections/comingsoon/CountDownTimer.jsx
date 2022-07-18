import { TextField, Box, Stack, Grid, FormControl, Typography } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../LayoutElements';

const InputDiv = styled(Box)`
  @media screen and (min-width: 768px) {
	
  border-radius: 51px;
	background: #FFF;
	borderRadius: 51px;

    }
`;

const MomentList = styled(Stack)`
		{$props => props}
		@media screen and (max-width: 768px) {
		  	// height: 100px;
	    }
`;

const Moment = styled('div')`
		color: var(--black);
		textTransform: capitalize;
	  	flex-direction: column;
	  	justify-content: center;
	  	align-items: center;
  		background: var(--white);
	  	display: flex;
	  	border-radius: 10px;
  		padding: 0 5px;
  		background: transparent;
	  	@media screen and (min-width: 425px) {
	  		height: 90px;
	  		width: 90px;
		  	background: var(--white);
	  	}
		@media screen and (min-width: 768px) {
		  	background: var(--white);
		  	height: 100px;
		  	width: 100px;
			padding: 38px !important;
	    }
`;

const MomentItem = styled('span')`
	color: var(--black);
	display: block;
	text-transform: capitalize;
	text-align: center;
	flex-basis: min-content;

	&:first-child {
		font-weight: bold;
	}

 	@media screen and (max-width: 375px) {
		color: var(--white);	
  		font-size: 30px;	
  		&:nth-child(2) {
			font-size: 16px !important;
		}	
 	}

	@media screen and (min-width: 768px) {
		font-size: 40px;
		&:nth-child(2) {
			font-size: 18px !important;
		}
	  	background: none;
    }
`;


const Timer = () => (
	
	<MomentList spacing={1} direction="row">
		<Moment>
	    	<MomentItem>7</MomentItem>
	    	<MomentItem>days</MomentItem>
	    </Moment>
	    <Moment>
	    	<MomentItem>24</MomentItem>
	    	<MomentItem>hours</MomentItem>
	    </Moment>
	    <Moment>
	    	<MomentItem>54</MomentItem>
	    	<MomentItem>minutes</MomentItem>
	    </Moment>
	    <Moment>
	    	<MomentItem>11</MomentItem>
	    	<MomentItem>seconds</MomentItem>
	    </Moment>
	</MomentList>
);


export default function CountDownTimer() {
	return (
		<Box
		      component="div"
		      sx={{
		        width: "100%"
		      }}
		      my={5}
		      noValidate
		      autoComplete="off"
		      display="flex"
		      justifyContent="center"
		      alignContent="center"
		      alignItems="center"
		      flexDirection="column"
	    >	
	    
	    	<Timer />
	    </Box>
	);
}