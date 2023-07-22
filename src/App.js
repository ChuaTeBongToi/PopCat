import logo from './logo.svg';
import './App.css';
import close from './catCloseMouth.png'
import open from './catOpenMouth.png'
import './App.css'
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const [PopCat, setPopCat] = useState(close);

  return (
    <div>
      <p>{clickCount}</p>
      <img src={PopCat} onClick={() => {
        PopCat == close ? setPopCat(open) : setPopCat(close);
        setClickCount(clickCount + 1);
      }}></img>
    </div>
  )
}

export default App;
