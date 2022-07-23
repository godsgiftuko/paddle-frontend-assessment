import { TextField, Box, Stack, FormControl, Input } from '@mui/material';
import styled from 'styled-components';

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

	&::before, &::after {
		display: none;
	}

	@media screen and (max-width: 425px) {
		color: var(--white) !important;
	  	margin: 0 0 30px;
	  	padding: 15px 0px;
	  	&::before, &::after {
			display: block;
			border-color: var(--white) !important;
			opacity: 0.23;
		}
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

	&::before, &::after {
		border-color: var(--white) !important;
		opacity: 0.23;
	}

	@media screen and (min-width: 425px) {
		margin: 0 20px;
	}
`;

const SubscriberComponent = styled(Stack)`
	--sub-comp-pad: 15px;
	--sub-comp-radius: 51px;
	// margin: 0 20px;

	@media screen and (min-width: 425px) {
		padding-left: 20px;
	  	padding-right: 20px;
  	}

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		flex-direction: row !important; 
	  	border-radius: var(--sub-comp-radius);
	  	background: var(--white);
	  	padding: 0;
	}
`;

const Button = styled.button`
  border-radius: 51px;
  background: var(--blue);
  color: var(--white);
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: calc(var(--semibold) + 100);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 15px 0;
  flex-grow: 1;

  @media screen and (min-width: 425) {
  	margin: 30px 0 0;
  }

`;

const inputStyle = {
  style: { color: '#FFF' },
}

export default function Subscribe() {
	return (
		<Div
			autoComplete="off" 
		      component="form"
		      noValidate
	    >	
				<Stack display="flex" py={{ sm: 5 }} justifyContent="center" alignItems={{ xs: "flex-start", sm: "center"}} direction={{ xs: "column", sm: "row"}}>
					<CustomInput placeholder="firstName" inputProps={inputStyle} />
	    			<CustomInput  placeholder="lastName" inputProps={inputStyle} />
	    		</Stack>

		    	<SubscriberComponent>
			    	<RoundedInputField placeholder="Enter your email address..."  variant="outlined"/>
				  	<Button variant="contained">JOIN OUR WAITING LIST</Button>
		    	</SubscriberComponent>
	    </Div>
	);
}