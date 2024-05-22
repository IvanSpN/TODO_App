import React from 'react';
import styles from './RegistrationForm.module.scss';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import { useRegistrationUserMutation } from '../../redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserLS } from '../../utils/setUserLS';

export const RegistrationForm: React.FC = () => {
  const [registrationUser, { data, error, isLoading }] =
    useRegistrationUserMutation();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const [errorInputRegData, setErrorInputRegData] = React.useState(false);

  React.useEffect(() => {
    setUserLS(data, navigate);
  }, [data]);

  //@ts-ignore
  const handleSubmitRegistre = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorInputRegData(true);
    } else {
      const newUserData = {
        email,
        password,
      };
      await registrationUser(newUserData).unwrap();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitRegistre}>
      <MyModal>
        <MyInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ввведите email..."
        />
        <MyInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль..."
        />
        <MyButton>Зарегистрироваться</MyButton>
        <p>
          У вас уже есть аккаунт? Пройдите на страницу{' '}
          <Link to="/login" style={{ color: 'brown' }}>
            авторизации.
          </Link>
        </p>
        {errorInputRegData && (
          <p style={{ color: 'red' }}>
            Введены не корректные данные при регистрации.
          </p>
        )}
        {isLoading && <p>Идет загрузка...</p>}
        {error && (
          <h3 style={{ color: 'red', fontSize: '12px' }}>
            Произошла ошибка при попытке зарегистрироваться. Пожалуйста,
            попробуйте снова позже.
          </h3>
        )}
      </MyModal>
    </form>
  );
};
