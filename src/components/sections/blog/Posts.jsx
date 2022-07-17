import Post from './Post';
import PostsGrid from './PostsGrid';
import { _posts } from '../../../mocks';


export default function Posts(){
	return (
		<PostsGrid title="lastest from the blog" subTitle="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive grid utilities.">
              <Post data={_posts} />
        </PostsGrid>
	);
}