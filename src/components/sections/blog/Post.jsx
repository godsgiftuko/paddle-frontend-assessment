
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardActions, CardContent, CardMedia, Button, Typography, Card } from '@mui/material';
import { NavMenu, NavLink } from '../../Layouts/NavbarElements';
import { _posts } from '../../../mocks';

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

export default function Post() {
  return (
    _posts.map(({ feature, title, text, image, link }, index) => (
       <Card sx={{ maxWidth: 'auto'}} key={index}>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" my={2} sx={{ fontWeight: 600, lineHeight: '1.50em', textTransform: 'capitalize' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '2.09em' }}>
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: '20px 16px' }}>
            <NavMenu show>
              <PostLink color="black" to="/">READ MORE</PostLink>
            </NavMenu>
          </CardActions>
        </Card>
    ))
  );
}