import { useState } from 'react';
import styles from './PostList.module.css';
import Post from './Post';
import NewPostSeparate from './NewPostSeparate';

export type ChangeBodyHandlerType = (
  event: React.ChangeEvent<HTMLTextAreaElement>
) => void;

export type ChangeAuthorHandlerType = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export default function PostList() {
  const [author, setAuthor] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const changeAuthorHandler: ChangeAuthorHandlerType = (event) => {
    setAuthor(event.target.value);
  };

  const changeBodyHandler: ChangeBodyHandlerType = (event) => {
    setBody(event.target.value);
  };

  return (
    <>
      <h1 className="text-center">PostListSeparate</h1>
      <NewPostSeparate
        onAuthorChange={changeAuthorHandler}
        onBodyChange={changeBodyHandler}
      />
      <ul className={styles.posts}>
        <Post author={author} body={body} />
      </ul>
    </>
  );
}
