import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

export default function Modal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const closeModalHandler = () => {
    navigate('/');
    // navigate('..'); // 동일 동작, 주소 한단계 위로
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler} />
      <dialog className={styles.modal} open>
        {children}
      </dialog>
    </>
  );
}
