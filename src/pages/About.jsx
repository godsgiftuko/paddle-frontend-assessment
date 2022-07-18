// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
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
  title: 'about us',
  subtitle: 'Built for Saas %and E-commerce'
}

const parseKnowMoreSnippet = {
  title: 'got a question?',
  subtitle: 'See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.'
}

const Message = () => (
    <Typography py={{ lg: 15, xs: 4 }} fontSize={{ md: '48px', xs: '30px' }}>
      Metricks was developed because just like you, we needed a product that could give us <b>good value.</b>
    </Typography>
  )


export default function About() {
    return (
    	<Page title="About Us" parseKnowMoreSnippet={parseKnowMoreSnippet} parsePageTitle={parsePageTitle} scale='large' useGradientBackground>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			  <Grid item container xs={12} >
            <Message />
				  	<Paragraph />
			  </Grid>
          </Grid>
    	</Page>
    );
}

