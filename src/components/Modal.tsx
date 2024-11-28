import styles from './Modal.module.css';

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog className={styles.modal} open>
        {children}
      </dialog>
    </>
  );
}
