import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar state={props.state.navbarPage} store={props.store} />
        <div className="page">
          <Routes>
            <Route path="/profile/*" element={<Profile store={props.store} />} />
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
            <Route path="/carousel/*" element={<Carousel />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
