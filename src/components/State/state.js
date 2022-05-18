import { rerender } from "../../render";

const state = {
	navbarPage: {
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
  },
  profilePage: {
    posts: [
      { 
        id:1,
        text: 'Its my first post',
        count: 15,
      },
      { 
        id:2,
        text: 'Hi',
        count: 6,
      },
      { 
        id:3,
        text: 'Today is a good day',
        count: 35,
      },
    ],
  },
  dialogPage: {
    users: [
      {
        name: 'Shahzod',
        id: 1,
        age: 25,
      },
      {
        name: 'Behzod',
        id: 2,
        age: 25,
      },
      {
        name: 'Jovox',
        id: 3,
        age: 25,
      },
      {
        name: 'Dilka',
        id: 4,
        age: 25,
      },
      {
        name: 'Mirali',
        id: 5,
        age: 25,
      },
    ],
    messages: [
      { message: 'Hello!' },
      { message: 'How are you?!' },
      { message: 'Where are you from?!' },
      { message: 'Hello!' },
      { message: 'Where are you from?!' },
    ],
  },
};
export let addPost = (postMessage)=>{
  let newPost={
    id: Date.now(),
    text: postMessage,
    count: 15,
  };
  state.profilePage.posts.push(newPost);
  rerender(state);
}
export default state