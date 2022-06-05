import React from 'react';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: 'Sancho',
        status: 'I Love MU',
        followed: true,
        photoURL: '',
        location: { country: 'Uzbekistan', city: 'Tashkent' },
      },
      {
        id: 2,
        name: 'Fernandes',
        status: 'I Love MU',
        followed: true,
        photoURL: '',
        location: { country: 'Uzbekistan', city: 'Tashkent' },
      },
      {
        id: 3,
        name: 'Ronaldo',
        status: 'I Love MU',
        followed: false,
        photoURL: '',
        location: { country: 'Uzbekistan', city: 'Termez' },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
