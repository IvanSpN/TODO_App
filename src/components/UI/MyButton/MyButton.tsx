import React from 'react';
import styles from './MyButton.module.scss';

type TMyButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  title?: string;
};

const MyButton: React.FC<TMyButtonProps> = ({ children, ...props }) => {
  return (
    <button className={`${styles.button} ${props.className}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
