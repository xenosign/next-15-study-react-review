import styles from './Post.module.css';

interface PostProps {
  id: number;
  author: string;
  body: string;
  onDelete: (id: number) => void;
}

export default function Post(props: PostProps) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>저자 : {props.author}</p>
      <p className={styles.text}>내용 : {props.body}</p>
      <p className={styles.actions}>
        <button type="button" onClick={() => props.onDelete(props.id)}>
          삭제
        </button>
      </p>
    </li>
  );
}
