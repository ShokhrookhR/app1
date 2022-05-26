import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar state={props.state.navbarPage} store={props.store} />
        <div className="page">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  // addPost={props.addPost}
                  // updatePostText={props.updatePostText}
                  store={props.store}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.dialogPage} dispatch={props.dispatch} />}
            />
            <Route path="/carousel/*" element={<Carousel />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
