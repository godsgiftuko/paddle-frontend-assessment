import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import styled from 'styled-components';

// @mui
import { Box, Container, Grid, Stack } from '@mui/material';
// config
import { companyName } from '../../config';
// theme
import { colorPalette } from '../../theme';
// 
import { PageTitle, KnowMoreSnippet } from '../Layouts/Elements';

const Main = styled(Box)`
  background: {$prop => prop.background && red || green};
`;

const Page = forwardRef(({ children, parsePageTitle={}, parseKnowMoreSnippet={}, background="false", title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | ${companyName}`}</title> 
      {meta}
    </Helmet>

    <Main background={background} component="main" pt={5} ref={ref} {...other}>
        {
          parsePageTitle && <PageTitle data={parsePageTitle} /> || ''
        }
      <Container maxWidth="xl">
        {children}
      </Container>
      {
        parseKnowMoreSnippet && <KnowMoreSnippet data={parseKnowMoreSnippet} /> || ''
      }
    </Main>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
