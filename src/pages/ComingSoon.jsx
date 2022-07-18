// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { Subscriber, CountDownTimer, WelcomeWidget } from '../components/sections/comingsoon';

              // <Subscriber/>
              // <CountDownTimer />
export default function ComingSoon() {
    return (
      <Page title="Coming Soon">
          <Container>
            <WelcomeWidget/>
          </Container>
    	</Page>
    );
}
