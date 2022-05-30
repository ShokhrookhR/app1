import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import DialogsContainer from './components/Dialogs/DialogsContainer';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
