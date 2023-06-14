import CharactersList from './components/pages/charactersList';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Character from './components/pages/character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path='/' element={<CharactersList />} />
        <Route strict exact path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;

// <h1 className='title'>Characters From Rick And Morty</h1>