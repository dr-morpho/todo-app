import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from '../redux/slice/todoSlice';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import TodoItem from '../components/TodoItem';
import Body from '../components/Body';
import { nanoid } from 'nanoid';
import styles from './app.module.scss';
import { setTheme, themeSelector } from '../redux/slice/themeSlice';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const theme = useSelector(themeSelector);
  const todoItemList = todos.map((elem) => <TodoItem key={nanoid()} {...elem} />);

  const changeMood = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  React.useEffect(() => {
    document.body.setAttribute('mood', theme);
  }, [theme]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <div className={styles.titlecontainer} onClick={changeMood}>
          <h1 className={styles.title}>Todo App</h1>
          {theme === 'light' ? <IoSunnyOutline size="20px" /> : <IoMoonOutline size="20px" />}
        </div>
        <Body />
        <div className={styles.todolist}>{todoItemList}</div>
      </div>
    </div>
  );
};
