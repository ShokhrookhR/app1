import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/carousel/*" element={<Carousel />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
