let initialization = {
  friends: [
    {
      id: 1,
      name: 'Mirali',
      img: 'https://picsum.photos/50/50',
    },
    {
      id: 2,
      name: 'Mohir',
      img: 'https://picsum.photos/50/51',
    },
    {
      id: 3,
      name: 'Sancho',
      img: 'https://picsum.photos/50/52',
    },
  ],
};

const navbarReducer = (state = initialization, action) => {
  return state;
};

export default navbarReducer;
