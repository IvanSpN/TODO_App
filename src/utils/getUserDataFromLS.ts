interface IUser {
  email: string;
  token: string;
}

export const getUserDataFromLS = (): IUser | null => {
  const user = localStorage.getItem('user');

  return user ? JSON.parse(user) : null;
};
