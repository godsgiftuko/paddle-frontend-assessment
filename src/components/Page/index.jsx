import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box, Container, Grid, Stack } from '@mui/material';
// config
import { companyName } from '../../config';
// theme
import { colorPalette } from '../../theme';
// 
import { PageTitle, KnowMoreSnippet } from '../Layouts/Elements';

const Page = forwardRef(({ children, parsePageTitle={}, parseKnowMoreSnippet={}, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | ${companyName}`}</title>
      {meta}
    </Helmet>

    <Box sx={{ background: colorPalette.pageBackground }} component="main" pt={5} ref={ref} {...other}>
        {
          parsePageTitle && <PageTitle data={parsePageTitle} /> || ''
        }
      <Container maxWidth="xl">
        {children}
      </Container>
      {
        parseKnowMoreSnippet && <KnowMoreSnippet data={parseKnowMoreSnippet} /> || ''
      }
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
