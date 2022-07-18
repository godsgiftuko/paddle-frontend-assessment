import { TextField, Box, Stack, FormControl, Input } from '@mui/material';
import { withStyles } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../LayoutElements';
import { typography, colorPalette } from '../../../theme';

const { size, weight } = typography;

const Div = styled(Box)`
	displayL flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const RoundedInputField = styled(Input)`
	padding: 15px 20px;
	  fontSize: 30px;
	  color: #000000;
	  outline: none;
	  border-radius: var(--sub-comp-radius);
	  border: none;
	  transition: all 0.2s ease-in-out;
	  text-decoration: none;
		flex: 4;

	  @media screen and (max-width: 425px) {
	  	margin: 0 0 30px;
	   }
`;

const InputDiv = styled(Box)`
  @media screen and (min-width: 768px) {
	width: 40%;
  	border-radius: 51px;
	background: #FFF;
	borderRadius: 51px;

    }
`;

const CustomInput = styled(Input)`
	border-color: red;
	display: none;
	padding: 15px 0;
	
	@media screen and (min-width: 425px) {
		margin: 0 20px;
	}
`;

const SubscriberComponent = styled(Stack)`
	--sub-comp-pad: 15px;
	--sub-comp-radius: 51px;
	// margin: 0 20px;
	
	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		flex-direction: row !important; 
	  	border-radius: var(--sub-comp-radius);
	  	background: var(--white);
	}
`;

export default function Subscribe() {
	return (
		<Div
			autoComplete="off" 
		      component="form"
		      noValidate
	    >	
				<Stack display="flex" py={{ sm: 5 }} justifyContent="center" alignItems={{ xs: "flex-start", sm: "center"}} direction={{ xs: "column", sm: "row"}}>
					<CustomInput
					  placeholder="firstName"
					  inputProps={{
					      style: { borderBottomColor: 'yellow' },
					    }}/>
	    			<CustomInput  placeholder="lastName" />
	    		</Stack>

		    	<SubscriberComponent>
			    	<RoundedInputField placeholder="Enter your email address..."  variant="outlined"/>
				  	<Button variant="contained" background="blue" flexGrow="1" padding="15px 0">JOIN OUR WAITING LIST</Button>
		    	</SubscriberComponent>
	    </Div>
	);
}