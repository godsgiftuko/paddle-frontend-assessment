import { Typography, Box, Grid, Stack, Container } from '@mui/material';
import styled from 'styled-components';
import { breakParagraph } from './breakParagraph';

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

    height: ${prop => prop.scale === 'large' ? "calc(100vh - 100px)" : '300px' };

    @media screen and (min-width: 768px) {

      &::before {
        position: absolute;
        content: '';
        left: 20%;
        top: 23%;
        height: 70%;
        width: 200px;
        display: block;
        -webkit-filter: blur(var(--blur));
        filter: blur(var(--blur));
        background: transparent linear-gradient(180deg, var(--pink) 0%, var(--shadedBlue) 120%) 0% 0% no-repeat padding-box;
      }

      &::after {
        position: absolute;
          content: '';
          top: 0;
          left: 0;
          height: 100%;
          width: ${prop => prop.scale === 'large' ? '50%': '40em'};
          display: block;
          background: transparent linear-gradient(180deg, var(--tintedBlue) 0%, var(--shadedBlue) 100%) 0% 0% no-repeat padding-box;
          opacity: var(--blur-opcacity);
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
  display: flex;
  flex-direction: column !important;
  alignt-items: center;
  justify-content: center;
`;

const Title = styled(Typography)`
  position: relative;

  &::before {
      position: absolute;
      content: '';
      left: -40px;
      top: 50%;
      height: 1px;
      width: 30px;
      background: var(--white);
    }

 @media screen and (max-width: 425px) {
    margin-left: 45px !important;
    &::before {
      position: absolute;
      content: '';
      left: -40px;
      top: 50%;
      height: 1px;
      width: 30px;
      background: var(--white);
    }
  }

`;


export default function PageTitle({ data, scale }) {
  const isLarge = scale == 'large';
  const symbol = '%';
  return (
      <Div container item width="100%" scale={scale} xs={12} md={12} mt={0} spacing={3} p={3} mb={3} ml={0} >
        <Stack
          className="css-1fnsymr-MuiContainer-root"
          sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            aligntItems: { sm: "center", lg: "flex-start" },
            paddingLeft: { sm: '60px', lg: '300px'  }
          }}
        >
          <Content item xs={12} lg={12} md={6}>
            <Title variant="body1" sx={{ textTransform: 'uppercase', color: '#FFF' }}>
              { data?.title }
            </Title>
            <Typography variant="h5" color="text.secondary" mt={2} sx={{ color: '#FFF', fontSize: { md: '50x', lg: '69px', sm: '37px', xs: '35px' } }}> 
            {
              data?.subtitle
                ? data.subtitle.includes(symbol) && breakParagraph(data.subtitle, symbol) || data.subtitle
                : data.subtitle
            }
              
            </Typography>
            <Typography mt={2} sx={{ display: { xs: 'block', md: 'none' }}}>
  Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.
              </Typography>
          </Content>
          {
            isLarge && 
            <Stack sx={{ display: { xs: 'none', md: 'block' }, width: { xs: '100%', sm: '500px' } ,position: { sm: 'absolute', xs: 'relative', zIndex: '2' }, bottom: '10%', right: { xs: '0', sm: '10%' }, }}>
              <Typography lineHeight="1.90em">
  Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.
              </Typography>
            </Stack>
          }
        </Stack>
    </Div>
  );
}

 