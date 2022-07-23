import { TextField, Box, Stack, Grid, FormControl, Typography } from '@mui/material';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../../LayoutElements';

const Container = styled(Box)`
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 1000;
    backdrop-filter: blur(17px);
	// opacity: var(--blur-opcacity);

  	
  	position: fixed;

  	&::before {
        position: absolute;
        content: '';
        height: 100%;
		width: 100%;
        display: block;
        // -webkit-filter: blur(var(--blur));
        filter: blur(10px);
        // background: transparent linear-gradient(180deg,  var(--shadedBlue3) 0%, var(--dark)  100%) 0% 0% padding-box;
      }
`;

const BackBtn = styled(Box)`
	background: var(--white);
	height: 70px;
	width: 70px;
	border-radius: 50%;
	position: absolute;
    transform: translate(50%, 50%);
    top: 3%;
    left: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

	@media screen and (min-width: 768px) {
	}
`;


export default function ContactUs({click, setClick}) {
	const closeForm = () => {
		setClick(!click);
	}

	return (
		<>
		{
			click && 
			<Container>
				<BackBtn onClick={closeForm}>
					<FaArrowRight color="black" />
				</BackBtn>
			</Container>
		}
		</>
	);
}