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
		font-size: 16px;
		font-weight: 300;
		transform: translate(100%, -40%);
		color: var(--black);	
	}
`;

export default function Paragraph() {
	return (
		<Grid container spacing={4} py={3}>
			<Grid item xs={12} sm={6}>
				<Title subtitle="01" variant="h6">why us?</Title>
				<Typography component="p" py={3} lineHeight="2.11em">
				We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
				</Typography>
				<Box py={3} sx={{ display: { xs: 'none', md: 'block' } }}>
				03
				</Box>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Title subtitle="01" variant="h6">Growing with you</Title>
				<Typography component="p" py={3} lineHeight="2.11em">
				Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
				</Typography>
				<Typography component="p" py={3} lineHeight="2.11em">
				Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.
				</Typography>
			</Grid>
		</Grid>
	);
}

