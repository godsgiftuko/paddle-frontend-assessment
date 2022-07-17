import { Grid, Container, Stack, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const Title = styled(Typography)`
	--pad-para-title: 100px;
	color: var(--black);
	font-size: 22px;
	padding-left: var(--pad-para-title);
	position: relative;
	text-transform: uppercase;

	--subtitle: '01';

	&::before {
		position: absolute;
		content: '';
		height: 1px;
		width: 80px;
		top: 50%;
		transform: translate(-120%, 0%);
		color: var(--black);
		background: var(--black);
	}

	&::after {
		position: absolute;
		content: var(--subtitle);
		left: 0;
		font-size: 18px;
		font-weight: 300;
		transform: translate(100%, -40%);
		color: var(--black);	
	}
`;

export default function Paragraph() {
	return (
		<Grid container spacing={4} py={3}>
			<Grid item xs={12} md={6}>
				<Title subtitle="01" variant="h6" mb={3}>why us?</Title>
				<Typography component="p" lineHeight="2.11em">Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Title subtitle="01" variant="h6" mb={3}>why us?</Title>
				<Typography component="p" lineHeight="2.11em">Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
				<br/>
				<br/>
Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.
				</Typography>
			</Grid>
		</Grid>
	);
}

