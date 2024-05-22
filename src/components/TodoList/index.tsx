import { useAuthMeQuery, useGetTodosQuery } from '../../redux/todosAPI';
import { Todo } from '../Todo';

import styles from './TodoList.module.scss';

export const TodoList = () => {
  // const { data, error, isLoading } = useGetTodosQuery('');
  // console.log(data);
  const userJson = localStorage.getItem('user');
  const userToken = userJson ? JSON.parse(userJson).token : null;

  const { data, error } = useAuthMeQuery(userToken);
  return (
    <div className={styles.todoList}>
      {error && <h2>Какой то пиздец</h2>}
      {data?.map((todo: any) => (
        <Todo {...todo} key={todo.title} />
      ))}
    </div>
  );
};
