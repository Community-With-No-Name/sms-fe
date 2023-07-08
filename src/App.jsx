import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import './App.css';
import Students from './pages/Students';
import ErrorPage from './pages/ErrorPage';
import Rooms from './pages/Rooms';
import Teachers from './pages/Teachers';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/teachers' element={<Teachers />} />
          
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
