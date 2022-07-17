import { Typography, Box, Grid, Stack } from '@mui/material';
import Post from './Post';
import PostsGrid from './PostsGrid';
import { _articles } from '../../../mocks';
import { Button } from '../../LayoutElements';


export default function Posts(){
	return (
		<Stack>
			<PostsGrid title="recent articles" subTitle="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive grid utilities." next>
				<Post data={_articles} />
	        </PostsGrid>
	        <Stack width="100%" justifyContent="center" alignItems="center">
				<Button>LOAD MORE</Button>
	        </Stack>
		</Stack>
	);
}