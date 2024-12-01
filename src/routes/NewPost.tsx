import styles from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';
import axios from 'axios';

export type ChangeUserInputHandlerType = (
  event: React.ChangeEvent<HTMLInputElement>,
  field: 'author' | 'body'
) => void;

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input id="name" name="author" type="text" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <input id="body" name="body" type="text" required />
        </p>
        <p className={styles.actions}>
          <Link to="..">취소</Link>
          <button type="submit">글 쓰기</button>
        </p>
      </Form>
    </Modal>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await axios.post('http://localhost:8080/posts', postData);

  // 데이터 갱신을 위해서 루트로 리다이렉트
  return redirect('/');
};
