
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardActions, CardContent, CardMedia, Button, Typography, Card } from '@mui/material';
import { NavMenu, NavLink } from '../../Layouts/NavbarElements';

const PostLink = styled(Link)`
  --pad: 100px;
  color:#FF00F7;
  // display: flex;
  // align-items: center;
  text-decoration: none;
  padding: 0;
  padding-left: var(--pad); 
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 3px;
    width: calc(var(--pad) - 30px);
    background: #FF00F7;
    left: 0;
    top: 50%;
    // display: inline;
  }

  &.active {
    color: #FF00F7;
  }
`;

export default function Post({ data }) {
  return (
    data.map(({ feature, title, text, link, ...rest }, index) => (
       <Card 
          sx={{ maxWidth: 'auto', boxShadow:  '0px 0px 30px #00000038'}}
          key={index}
        >
          {
          rest?.image &&
          <CardContent>
            <CardMedia
            component="img"
            height="300"
            image={rest.image}
            alt={title} />
            </CardContent>
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"  mt={1} sx={{ fontWeight: 600, lineHeight: '1.30em', textTransform: 'capitalize' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '2.01em' }}>
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: '0px 16px 30px 16px' }}>
            <NavMenu show>
              <PostLink color="black" to="/">READ MORE</PostLink>
            </NavMenu>
          </CardActions>
        </Card>
    ))
  );
}