import React, { InputHTMLAttributes } from 'react';

import styles from './MyInput.module.scss';

interface IMyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const MyInput = React.forwardRef<HTMLInputElement, IMyInputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${styles.input} ${props.className}`}
        {...props}
      />
    );
  }
);

export default MyInput;
