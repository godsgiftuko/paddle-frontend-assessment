import { TextField, Box, Stack, FormControl } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../LayoutElements';
import { typography, colorPalette } from '../../../theme';

const { size, weight } = typography;

const RoundedInputField = styled.input.attrs({ 
  type: 'text',
})`
  border-radius: 51px;
  padding: 10px 22px;
  fontSize: 30px;
  color: #000000;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

const InputDiv = styled(Box)`
  @media screen and (min-width: 768px) {
	width: 40%;
  border-radius: 51px;
	background: #FFF;
	borderRadius: 51px;

    }
`;

export default function Subscribe() {
	return (
		<Box
		      component="form"
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
	    	<Box>
		    	 <FormControl>
			    	 <TextField
			    	  sx={{

        width: { sm: 200, md: 300 },
        "& .MuiInputBase-root": {
            height: 80
        }
    }}
				          id="firstName"
				          label="First Name..."
				          placeholder="First Name..."
				          multiline
				          variant="standard"/>
		    	 </FormControl>
		    	 <FormControl>
			        <TextField
				          id="lastName"
				          label="Last Name..."
				          placeholder="Last Name..."
				          multiline
				          variant="standard"/>
		    	 </FormControl>
	    	</Box>
	    	<InputDiv>

	    		<RoundedInputField    
				    variant="outlined"
				    // inputProps are used to pass attributes native to the underlying 
				    // HTML input element, e.g. name, id, style.
				    inputProps={{
				      style: { textAlign: 'center', fontSize: size.medium22, color: colorPalette.black },
				    }}/>
		    	 <Button variant="contained" sx={{ fontSize: size.small16, padding: '60px' }}>JOIN OUR WAITING LIST</Button>
	    	</InputDiv>

		<h1> susbcribe </h1>
	    </Box>
	);
}