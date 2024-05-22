import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, TodoList, Footer } from '../components';
import { useAuthMeQuery } from '../redux';

import styles from '../styles/Home.module.scss';

const Home = () => {
  const navigate = useNavigate();

  const userJson = localStorage.getItem('user');
  const userToken = userJson ? JSON.parse(userJson).token : null;

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/');
    } else {
      navigate('/registration');
    }
  }, []);
  return (
    <div className={styles.homePage}>
      <Header />
      <hr />
      <div className={styles.content}>
        <TodoList />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
