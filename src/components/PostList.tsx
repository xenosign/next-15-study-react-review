import styles from './PostList.module.css';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

export type PostProps = {
  id: number;
  author: string;
  body: string;
};

export default function PostList() {
  const posts = useLoaderData() as PostProps[];

  // const deletePostHandler = useCallback(
  //   async (id: number) => {
  //     try {
  //       await axios.delete(`http://localhost:8080/posts/${id}`);
  //       await fetchPosts();
  //     } catch (error) {
  //       console.error('Post 삭제 에러:', error);
  //     }
  //   },
  //   [fetchPosts]
  // );

  const renderPosts = () => {
    if (posts.length === 0) {
      return <h2 className="text-center">There's no posts yet</h2>;
    }

    return (
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </ul>
    );
  };

  return <>{renderPosts()}</>;
}
