import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItems/DialogItem';
import s from './Dialogs.module.css';

const Message = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};
// const users = [
//   {
//     name: 'Shahzod',
//     id: 1,
//     age: 25,
//   },
//   {
//     name: 'Behzod',
//     id: 2,
//     age: 25,
//   },
//   {
//     name: 'Jovox',
//     id: 3,
//     age: 25,
//   },
//   {
//     name: 'Dilka',
//     id: 4,
//     age: 25,
//   },
//   {
//     name: 'Mirali',
//     id: 5,
//     age: 25,
//   },
// ];
// const messages = [
//   { message: 'Hello!' },
//   { message: 'How are you?!' },
//   { message: 'Where are you from?!' },
//   { message: 'Hello!' },
//   { message: 'Where are you from?!' },

// ];

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.dialogItems}>
            {props.state.users.map((e) => (
              <DialogItem name={e.name} id={e.id} />
            ))}
          </div>
          <div className={s.messages}>
            {props.state.messages.map((e) => (
              <Message message={e.message} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
