import styles from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

export type PostProps = {
  author: string;
  body: string;
};

export default function PostList({
  isModalVisible,
  closeModalHandler,
}: {
  isModalVisible: boolean;
  closeModalHandler: () => void;
}) {
  // 컴포넌트 시작
  const [posts, setPosts] = useState<PostProps[]>([]);

  // # 지연 업데이트 관련 내용 추가
  // 리액트가 이전 상태를 가져올 때, 콜백을 사용하여 이전 상태를 제대로 가져오기 위해 지연 업데이트를 사용
  // 이 코드를 써야만 이전 상태에 대한 정상적 업데이트가 가능
  const addPostHandler = (post: PostProps) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  let modalContent = null;

  if (isModalVisible) {
    modalContent = (
      <Modal onClose={closeModalHandler}>
        <NewPost onClose={closeModalHandler} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      <div>
        {modalContent}
        {posts.length > 0 ? (
          <ul className={styles.posts}>
            {posts.map((post, index) => (
              <Post key={index} author={post.author} body={post.body} />
            ))}
          </ul>
        ) : (
          <h2 className="text-center">There's no posts yet</h2>
        )}
      </div>
    </>
  );
}
