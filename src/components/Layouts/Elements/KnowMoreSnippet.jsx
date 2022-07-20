import { Typography, Box, Grid, Stack, Container } from '@mui/material';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled(Box)`
    background: transparent linear-gradient(180deg, var(--tintedBlue) 0%, var(--shadedBlue) 100%) 0% 0% no-repeat padding-box;
    color: var(--white);
     // height: 150px;
    position: relative;

    @media screen and (min-width: 768px) {
      height: 300px;

     }
`;
const Title = styled(Typography)`
  position: relative;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: {$prop => prop.show && prop.show || none};
  }
`;

const PostLink = styled(Link)`
  --pad: 100px;
  color:#FF00F7;
  text-decoration: none;
  padding: 0;
  margin-top: 30px;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;

  &::after {
    content: '➡';
    position: absolute;
    display: block;
    width: var(--pad);
    color: #FF00F7;
    right: 0;
    transform: translate(110%, -100%);
  }

  &.active {
    color: #FF00F7;
  }
`;
export default function KnowMoreSnippet({ data }) {
  return (
    <Div mt={5}>
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Grid container rowSpacing={1} py={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <Grid item xs={12} md={6} py={3}>
              <Title variant="h5" sx={{ textTransform: 'capitalize', color: '#FFF', fontSize: { md: '50x', sm: '35px' } }} >
                {data?.title}
              </Title>
              <Typography variant="" color="text.secondary" sx={{ display: 'block', color: '#FFF', opacity: '0.87' }}>
                {data?.subtitle}
              </Typography>
              <NavMenu>
              <PostLink color="black" pt={{ xs: 1, md: 2}} to="/">contact us</PostLink>

              </NavMenu>
          </Grid>
          <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }} py={3}>
            2
          </Grid>
        </Grid>
      </Container>
    </Div>
  );
}

 