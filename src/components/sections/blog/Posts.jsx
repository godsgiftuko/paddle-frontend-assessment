import Post from './Post';
import PostsGrid from './PostsGrid';
import { _posts } from '../../../mocks';


export default function Posts(){
	return (
		<PostsGrid title="lastest from the blog" subTitle="As technology continues to become increasingly important in our lives, it’s beneficial to keep up with the latest news and trends.">
              <Post data={_posts} />
        </PostsGrid>
	);
}