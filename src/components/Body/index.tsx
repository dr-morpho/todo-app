import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { MdOutlineClear } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAll,
  clearText,
  createTodos,
  setText,
  textSelector,
  todoSelector,
} from '../../redux/slice/todoSlice';
import { nanoid } from 'nanoid';
import styles from './body.module.scss';

const Body: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const inputRef = React.useRef<HTMLInputElement>(null!);
  const input = useSelector(textSelector);

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setText(event.target.value));

  const createTodo = () => {
    if (input) {
      dispatch(createTodos({ id: nanoid(), text: input, clicked: false }));
      dispatch(clearText(''));
      inputRef.current.focus();
    }
  };
  const onClickClear = () => {
    dispatch(clearText(''));
    inputRef.current.focus();
  };

  const clearAllNote = () => {
    dispatch(clearAll([]));
    inputRef.current.focus();
  };

  return (
    <div className={styles.inputbutton}>
      <div className={styles.inputtop}>
        <div className={styles.inputtop__input}>
          <input
            ref={inputRef}
            className={styles.inputtop__in}
            placeholder="Text, please"
            onChange={textChange}
            name="textForm"
            value={input}
            type="text"
          />
          {input && <MdOutlineClear onClick={onClickClear} className={styles.inputtop__clear} />}
        </div>
        <MdAddCircleOutline className={styles.inputtop__add} onClick={createTodo} />
      </div>
      {todos.length >= 1 && (
        <div className={styles.clearall}>
          <p>Clear all</p>
          <AiOutlineDelete className={styles.inputtop__button} onClick={clearAllNote} />
        </div>
      )}
      <hr className={styles.line} />
    </div>
  );
};

export default Body;
