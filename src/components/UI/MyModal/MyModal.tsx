import React from 'react';
import styles from './MyModal.module.scss';

interface IMyModalProps {
  children: any;
}

const MyModal: React.FC<IMyModalProps> = ({ children }) => {
  return (
    <div className={[styles.myModal, styles.active].join(' ')}>
      <div className={styles.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
