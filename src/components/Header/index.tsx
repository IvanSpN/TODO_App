import MyButton from '../UI/MyButton/MyButton';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { getUserDataFromLS } from '../../utils/getUserDataFromLS.ts';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const user = getUserDataFromLS();

  const userEmail = user ? user.email : '';

  const handlerLogOut = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>TODO_App</h1>
      <div className={styles.userInfo}>
        <p className={styles.email}>{userEmail}</p>
        <MyButton onClick={handlerLogOut}>Выйти</MyButton>
      </div>
    </header>
  );
};
