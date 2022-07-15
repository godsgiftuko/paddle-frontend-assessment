// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function ComingSoon() {
    return (
    	<Page title="Coming Soon">
	        <div className="container">
	            <h1>Coming Soon page</h1>
	        </div>
    	</Page>
    );
}
