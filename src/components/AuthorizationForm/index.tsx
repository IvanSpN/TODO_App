import React from 'react';
import styles from './AuthorizationForm.module.scss';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';

import { useAuthUserMutation } from '../../redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserLS } from '../../utils/setUserLS';

export const AuthorizationForm: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const [fetchAuth, { data, error }] = useAuthUserMutation();

  const navigate = useNavigate();

  React.useEffect(() => {
    setUserLS(data, navigate);
  }, [data]);

  //@ts-ignore
  const handlerSubmitAuthForm = (e) => {
    e.preventDefault();
    const regDataUser = {
      email,
      password,
    };
    fetchAuth(regDataUser);
  };
  return (
    <form className={styles.form} onSubmit={handlerSubmitAuthForm}>
      <MyModal>
        <MyInput
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton>Авторизоваться</MyButton>
        <p>
          У вас еще нет аккаунта? Тогда зарегестрируйтесь{' '}
          <Link to="/registration" style={{ color: 'brown' }}>
            здесь.
          </Link>
        </p>

        {error && (
          <p style={{ color: 'red' }}>
            Пользователь не зарегистрирован или введены не корректные данные.
          </p>
        )}
      </MyModal>
    </form>
  );
};
