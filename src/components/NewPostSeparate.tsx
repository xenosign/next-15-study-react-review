import styles from './NewPost.module.css';
import {
  ChangeAuthorHandlerType,
  ChangeBodyHandlerType,
} from './PostListSeparate';

export default function NewPostSeparate(props: {
  onBodyChange: ChangeBodyHandlerType;
  onAuthorChange: ChangeAuthorHandlerType;
}) {
  return (
    <div className={styles.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required onChange={props.onBodyChange} />
      </p>
    </div>
  );
}
