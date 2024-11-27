import styles from './NewPost.module.css';
import { ChangeUserInputHandlerType } from './PostList';

export default function NewPost(props: {
  onUserInputChange: ChangeUserInputHandlerType;
}) {
  return (
    <div className={styles.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          required
          onChange={(e) => props.onUserInputChange(e, 'author')}
        />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <input
          id="body"
          type="text"
          required
          onChange={(e) => props.onUserInputChange(e, 'body')}
        />
      </p>
    </div>
  );
}
