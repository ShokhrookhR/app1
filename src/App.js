import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/carousel/*" element={<Carousel />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
