import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import UsersContainerFunc from './components/Users/UsersContainerFunc';
import ProfileContainerFunc from './components/Profile/ProfileContainerFunc';
import Preloader from './components/Users/Preloader';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
function App() {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainerFunc />} />
          <Route path="/profile/*" element={<ProfileContainerFunc />} />
          <Route
            path="/dialogs/*"
            element={
              <Suspense fallback={<Preloader />}>
                <DialogsContainer />
              </Suspense>
            }
          />
          <Route path="/carousel/*" element={<Carousel />} />
          <Route path="/users/*" element={<UsersContainerFunc />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
