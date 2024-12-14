import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Calculator' element={<Calculator/>} />
      </Routes>
    </>
  );
}

export default App;
