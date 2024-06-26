import styles from '@components/common/button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  style: 'btn_primary';
  onClick: () => void;
}

export function Button({ style, children, onClick }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[style]}`} onClick={onClick}>
      {children}
    </button>
  );
}