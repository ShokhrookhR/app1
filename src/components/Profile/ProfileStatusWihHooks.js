import React, { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWihHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.profileStatus);
  let activateEditMode = () => {
    setEditMode(true);
  };
  let deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  let onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };
  useEffect(() => {
    setStatus(props.profileStatus);
  }, [props.profileStatus]);

  return (
    <div>
      Мой Статус:
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.profileStatus || '---'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onChangeStatus} autoFocus onBlur={deActivateEditMode} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWihHooks;
