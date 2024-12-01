import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Post.module.css';

interface PostProps {
  id: number;
  author: string;
  body: string;
}

export default function Post({ id, author, body }: PostProps) {
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:8080/posts/${id}`);
    navigate('/');
  };

  return (
    <li className={styles.post}>
      <Link to={`/${id}`}>
        <p className={styles.author}>저자 : {author}</p>
        <p className={styles.text}>내용 : {body}</p>
      </Link>
      <p className={styles.actions}>
        <button type="button" onClick={() => handleDelete(id)}>
          삭제
        </button>
      </p>
    </li>
  );
}
