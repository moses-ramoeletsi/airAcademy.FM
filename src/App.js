import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import News from './components/News';
import Advertisements from './components/Advertisements';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import programsByDay from './data/Programs';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home programsByDay={programsByDay} />}/>
          <Route path='/schedule' element={<Schedule programsByDay={programsByDay} />} />
          <Route path='/news' element={<News />} />
          <Route path='/advertisement' element={<Advertisements />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
