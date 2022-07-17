// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { Posts, PostsGrid, Articles } from '../components/sections/blog';

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
  title: 'What to know more about metrics',
  subtitle: 'learn who we are and what drives us.'
}


            // <Posts />
            // <Articles />

export default function Blog() {
    return (
      <Page title="Blog It" parseKnowMoreSnippet={parseKnowMoreSnippet} parsePageTitle={parsePageTitle}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          </Grid>
    	</Page>
    );
}
