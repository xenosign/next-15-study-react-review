import styles from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export type PostProps = {
  id: number;
  author: string;
  body: string;
};

type PostListProps = {
  isModalVisible: boolean;
  closeModalHandler: () => void;
};

export default function PostList({
  isModalVisible,
  closeModalHandler,
}: PostListProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Post 데이터 가져오기 에러:', error);
    }
  }, []);

  const addPostHandler = useCallback(
    async (newPost: PostProps) => {
      try {
        await axios.post('http://localhost:8080/posts', newPost);
        await fetchPosts(); // 새 게시글 추가 후 목록 새로고침
      } catch (error) {
        console.error('Post 추가 에러:', error);
      }
    },
    [fetchPosts]
  );

  const deletePostHandler = useCallback(
    async (id: number) => {
      try {
        await axios.delete(`http://localhost:8080/posts/${id}`);
        await fetchPosts();
      } catch (error) {
        console.error('Post 삭제 에러:', error);
      }
    },
    [fetchPosts]
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); // 컴포넌트 마운트 시에만 실행

  const renderPosts = () => {
    if (posts.length === 0) {
      return <h2 className="text-center">There's no posts yet</h2>;
    }

    return (
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} {...post} onDelete={deletePostHandler} />
        ))}
      </ul>
    );
  };

  return (
    <>
      {isModalVisible && (
        <Modal onClose={closeModalHandler}>
          <NewPost onClose={closeModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}
      {renderPosts()}
    </>
  );
}
