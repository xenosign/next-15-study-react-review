import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Post.module.css';

interface PostProps {
  id: number;
  author: string;
  body: string;
}

export default function Post(props: PostProps) {
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8080/posts/${id}`);
    navigate('/');
  };

  return (
    <li className={styles.post}>
      <p className={styles.author}>저자 : {props.author}</p>
      <p className={styles.text}>내용 : {props.body}</p>
      <p className={styles.actions}>
        <button type="button" onClick={() => handleDelete(props.id)}>
          삭제
        </button>
      </p>
    </li>
  );
}
