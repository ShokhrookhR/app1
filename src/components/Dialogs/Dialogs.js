import React from 'react';
import DialogItem from './DialogItems/DialogItem';
import s from './Dialogs.module.css';

const Message = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

function Dialogs(props) {
  let newRef = React.createRef();
  let onAddMessage = () => {
    let text = newRef.current.value;
    if (props.newMessageBody) {
      props.addMessage(text);
    }
  };
  let onUpdateMessageText = () => {
    let text = newRef.current.value;
    props.updateMessageText(text);
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

              <div className={s.btns}>
                <textarea
                  ref={newRef}
                  onChange={onUpdateMessageText}
                  value={props.newMessageBody}></textarea>
                <button onClick={onAddMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
