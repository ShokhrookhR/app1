import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, updateMessageActionCreator } from '../State/store';
import DialogItem from './DialogItems/DialogItem';
import s from './Dialogs.module.css';

const Message = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

function Dialogs(props) {
  let newRef = React.createRef();
  let addMessage = () => {
    let text = newRef.current.value;
    if (props.state.newMessageBody) {
      props.dispatch(addMessageActionCreator(text));
    }
    // alert(text);
  };
  let updateMessageText = () => {
    let text = newRef.current.value;
    props.dispatch(updateMessageActionCreator(text));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.row}>
            <div className={s.dialogItems}>
              {props.state.users.map((e) => (
                <DialogItem name={e.name} id={e.id} />
              ))}
            </div>
            <div className={s.messages}>
              <div className={s.messageItems}>
                {props.state.messages.map((e) => (
                  <Message message={e.message} />
                ))}
              </div>

              <div className={s.btns}>
                <textarea
                  ref={newRef}
                  onChange={updateMessageText}
                  value={props.state.newMessageBody}></textarea>
                <button onClick={addMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
