import { Typography, Box, Grid, Stack, Container } from '@mui/material';
import styled from 'styled-components';

const Div = styled(Grid)`
    background: transparent linear-gradient(180deg, var(--shadedBlue3) 0%, var(--dark) 100%) 0% 0% no-repeat padding-box;
    color: var(--white);
     height: 150px;
    position: relative;
    display: flex;
    place-item: center;

    &::before {
     display: none;
    }

    &::after {
     display: none;
    }


    @media screen and (min-width: 768px) {
      height: 300px;

      &::before {
        position: absolute;
        content: '';
        left: 200px;
        top: 23%;
        height: 70%;
        width: 130px;
        display: block;
        background: var(--white);
      }

      &::after {
        position: absolute;
          content: '';
          top: 0;
          left: 0;
          height: 100%;
          width: 25em;
          display: block;
          background: transparent linear-gradient(180deg, #213F72 0%, #19073B 100%) 0% 0% no-repeat padding-box;
          opacity: 0.8;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
      }
    }

     @media screen and (max-width: 768px) {
      &::before {
        left: 20px;
      }
    }
`;

const Content = styled(Grid)`
  color: var(--white);
  width: 100% !important;
  height: 150px;
  position: relative;
  z-index: 2;
`;

const Title = styled(Typography)`
  position: relative;

 @media screen and (min-width: 768px) {
    &::before {
      position: absolute;
      content: '';
      left: -60px;
      top: 50%;
      height: 1px;
      width: 50px;
      background: var(--white);
    }
  }
`;


export default function PageTitle({ data }) {
  console.log(data)
  return (
      <Div container item   width="100%" xs={12} md={12} spacing={3} p={3} my={3} ml={0} >
        <Stack sx={{ color: 'white', display: { xs: 'none', sm: 'none' } }}>
        jdkd
        </Stack>
        <Stack
          className="css-1fnsymr-MuiContainer-root"
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            aligntItems: { sm: "center", lg: "flex-start" },
            paddingLeft: { sm: '60px', md: '300px' }
          }}
        >
          <Content item xs={12} sm={6}>
            <Title variant="body1" sx={{ textTransform: 'capitalize', color: '#FFF' }}>
              {data?.title}
            </Title>
            <Typography variant="h5" color="text.secondary" mt={2} sx={{ color: '#FFF', fontSize: { md: '50x', sm: '35px' } }}>
              {data?.subtitle}
            </Typography>
          </Content>
        </Stack>
    </Div>
  );
}

 