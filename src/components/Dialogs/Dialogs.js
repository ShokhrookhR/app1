import React from 'react';
import DialogItem from './DialogItems/DialogItem';
import s from './Dialogs.module.css';
import Dialog from './DialogForm';

const Message = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

function Dialogs(props) {
  let onSendMessage = (value) => {
    props.addMessage(value.message);
    console.log(value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.row}>
            <div className={s.dialogItems}>
              {props.users.map((e) => (
                <DialogItem name={e.name} id={e.id} />
              ))}
            </div>
            <div className={s.messages}>
              <div className={s.messageItems}>
                {props.messages.map((e) => (
                  <Message message={e.message} />
                ))}
              </div>
              <Dialog onSubmit={onSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
