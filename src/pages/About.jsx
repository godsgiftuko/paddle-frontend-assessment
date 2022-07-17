// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { Paragraph } from '../components/sections/about';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const parsePageTitle = {
  title: 'Blog',
  subtitle: 'Articles and News'
}

const parseKnowMoreSnippet = {
  title: 'got a question?',
  subtitle: 'See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.'
}



export default function About() {
    return (
    	<Page title="About Us" parseKnowMoreSnippet={parseKnowMoreSnippet} parsePageTitle={parsePageTitle} background={"true"} >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			  <Grid item container xs={12} >
				  	<Paragraph />
			  </Grid>
          </Grid>
    	</Page>
    );
}

