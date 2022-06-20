import s from './MyPosts.module.css';
import NewPostForm from './NewPostForm';
import Post from './Post/Post';

function MyPosts(props) {
  let onAddPost = (value) => {
    if (value.newPostText) {
      props.addPost(value.newPostText);
    }
  };
  return (
    <div className={s.posts}>
      <div className={s.title}></div>
      <NewPostForm onSubmit={onAddPost} />
      {props.posts.map((e) => (
        <Post text={e.text} likeCount={e.count} />
      ))}
    </div>
  );
}

export default MyPosts;
