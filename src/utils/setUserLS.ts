import { NavigateFunction } from 'react-router-dom';

interface IData {
  token: string;
  data: {
    email: string;
    password: string;
    id: number;
  };
}

interface INewUser {
  email: string;
  token: string;
}

export const setUserLS = (data: IData, navigate: NavigateFunction): void => {
  if (data && data.token) {
    const newUser: INewUser = {
      email: data.data.email,
      token: data.token,
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/');
  }
};
