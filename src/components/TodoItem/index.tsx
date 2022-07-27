import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodos, doneTodos, taskType } from '../../redux/slice/todoSlice';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from './todoitem.module.scss';

const TodoItem: React.FC<taskType> = ({ id, text, clicked }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.todoitem}>
      <p className={clicked ? styles.done : styles.none}>{text}</p>
      <div className={styles.buttoncontainer}>
        <AiOutlineCheckCircle
          className={styles.todoitem__button}
          onClick={() => dispatch(doneTodos(id))}
        />
        <AiOutlineDelete
          className={styles.todoitem__button}
          onClick={() => dispatch(deleteTodos(id))}
        />
      </div>
    </div>
  );
};

export default TodoItem;
