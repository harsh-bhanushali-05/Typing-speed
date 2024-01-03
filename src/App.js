import { useEffect, useState } from 'react';
import './App.css';
import Words from './components/Words';
import Time from './components/Time';
import Headers from './components/Headers';
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
  function changePun() {
    setpun((prev) => !prev);
  }
  function changeNumbder() {
    setnumbers((prev) => !prev);
  }
  return <div><Headers changeTime={changeTime} number={changeNumbder} pun={changePun} Mode={mode} changeMode={changeMode} Numberofwords={changeWords} />
    {
      mode == 'words' ? <div className='box'><Words className="text" numbers={numbers} punctuation={punctuation} words={word} /></div>
        : <div className='box'>
          <Time className="text" numbers={numbers} punctuation={punctuation} words={time * (250 / 60)} time={time} /></div>
    }</div>
}

export default App;
