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

const RoundedInputField = styled.input.attrs({ 
	  type: 'text',
	})`
  border-radius: 51px;
  padding: 15px 22px;
  fontSize: 30px;
  color: #000000;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  @media screen and (max-width: 768px) {
  	margin: 0 0 20px;
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
	
	@media screen and (min-width: 425px) {
		margin: 0 20px;
	}
`;

export default function Subscribe() {
	return (
		<Div
			autoComplete="off" 
		      component="form"
		      noValidate
	    >	
				<Stack display="flex" py={5} justifyContent="center" alignItems={{ xs: "flex-start", sm: "center"}} direction={{ xs: "column", sm: "row"}}>
					<CustomInput
					  placeholder="firstName"
					  inputProps={{
					      style: { borderBottomColor: 'yellow' },
					    }}/>
	    			<CustomInput  placeholder="lastName" />
	    		</Stack>

		    	<SubscriberComponent>
			    	<RoundedInputField  variant="outlined"
					    inputProps={{
					      style: { textAlign: 'center', fontSize: size.medium22, color: colorPalette.black },
					    }}/>
				  	<Button variant="contained" background="blue" padding="15px 0" sx={{ fontSize: size.small16, width: '50%' }}>JOIN OUR WAITING LIST</Button>
		    	</SubscriberComponent>
	    </Div>
	);
}