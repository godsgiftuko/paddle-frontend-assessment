import { Typography, Box, Stack } from '@mui/material';
import styled from 'styled-components';
import { breakParagraph } from '../../Layouts/Elements'

export default function WelcomeWidget() {
	return (
		<Box color="#FFF" textAlign="center">
			<Typography variant="h2" my={3} fontSize={{ xs: "3.35rem", sm: "3.76em" }}  padding={{ md: "0 100px" }} fontWeight="bold">Something awesome is coming soon</Typography>
			<Typography variant="body1" fontWeight="300">
				Your all-in-one affiliate marketing tracking software <b>track, automate</b> and <b>optimize</b> your campaigns.
			</Typography>
		</Box>
	);
}