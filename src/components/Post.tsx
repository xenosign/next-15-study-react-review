import styles from './Post.module.css';

interface PostProps {
  author: string;
  body: string;
}

export default function Post(props: PostProps) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>저자 : {props.author}</p>
      <p className={styles.text}>내용 : {props.body}</p>
    </li>
  );
}
