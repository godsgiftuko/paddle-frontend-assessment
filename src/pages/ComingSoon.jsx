// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { SubscriberWidget, CountDownTimer, WelcomeWidget } from '../components/sections/comingsoon';

              // <SubscriberWidget/>
export default function ComingSoon() {
    return (
      <Page title="Coming Soon" background>
          <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <WelcomeWidget/>
              <CountDownTimer />
          </Container>
    	</Page>
    );
}
