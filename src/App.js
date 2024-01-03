import { useEffect, useState } from 'react';
import './App.css';
import Words from './components/Words';
import Time from './components/Time';
function App() {
  const [mode, setMode] = useState('words');
  const [word, setwords] = useState(10);
  const [time, setTime] = useState(15);
  const [punctuation, setpun] = useState(false);
  const [numbers, setnumbers] = useState(false);
  function changeWords(words) {
    setwords(words);
  }
  function changeTime(q) {
    setTime(q);
  }
  function changeMode(mode) {
    setMode(mode);
  }
  return mode == 'words' ? <div className='box'>
    <div className='makebox'>
      <div className='options'>
        <h2 className=" topBar" onClick={() => setpun((prev) => !prev)}>punctuation</h2>
        <h2 className=" topBar" onClick={() => setnumbers((prev) => !prev)}>numbers</h2>
        <h1>|</h1>
        <h1 className=" topBar" onClick={() => changeMode("words")}>Words</h1>
        <h1 className=" topBar" onClick={() => changeMode("Time")}> Time</h1>

        <h1 className=" topBar" onClick={() => changeWords(10)}>10</h1>
        <h1 className=" topBar" onClick={() => changeWords(15)}>20</h1>
        <h1 className=" topBar" onClick={() => changeWords(20)}>25</h1>
        <h1 className=" topBar" onClick={() => changeWords(50)}>50</h1>
      </div>
    </div>
    <Words className="text" numbers={numbers} punctuation={punctuation} words={word} /></div>
    : <div className='box'>
      <div className='makebox'>
        <div className='options'>
          <h1 className=" topBar" onClick={() => changeMode("words")}>Words</h1>
          <h1 className=" topBar" onClick={() => changeMode("Time")}> Time</h1>
          <h1 className=" topBar" onClick={() => setpun((prev) => !prev)}>punctuation</h1>
          <h1 className=" topBar" onClick={() => setnumbers((prev) => !prev)}>numbers</h1>
          <h1 className=" topBar" onClick={() => changeTime(15)}>15</h1>
          <h1 className=" topBar" onClick={() => changeTime(30)}>30</h1>
          <h1 className=" topBar" onClick={() => changeTime(45)}>45</h1>
          <h1 className=" topBar" onClick={() => changeTime(60)}>60</h1>
        </div>
      </div>
      <Time className="text" numbers={numbers} punctuation={punctuation} words={time * (250 / 60)} time={time} /></div>
}

export default App;
