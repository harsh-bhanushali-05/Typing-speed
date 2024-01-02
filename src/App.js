import { useEffect, useState } from 'react';
import './App.css';
import Words from './components/Words';
import Time from './components/Time';
function App() {
  const [mode, setMode] = useState('words');
  const [word, setwords] = useState(10);
  const [time, setTime] = useState(15);
  function changeWords(words) {
    setwords(words);
  }
  function changeTime(q) {
    setTime(q);
  }
  function changeMode(mode) {
    setMode(mode);
  }
  return mode == 'words' ? <div>
    <h1 onClick={() => changeMode("words")}>Words</h1>
    <h1 onClick={() => changeMode("Time")}> Time</h1>
    <h1 onClick={() => changeWords(10)}>10</h1>
    <h1 onClick={() => changeWords(15)}>20</h1>
    <h1 onClick={() => changeWords(20)}>25</h1>
    <h1 onClick={() => changeWords(50)}>50</h1>
    <Words words={word} /></div>
    : <div>
      <h1 onClick={() => changeMode("words")}>Words</h1>
      <h1 onClick={() => changeMode("Time")}> Time</h1>
      <h1 onClick={() => changeTime(15)}>15</h1>
      <h1 onClick={() => changeTime(30)}>30</h1>
      <h1 onClick={() => changeTime(45)}>45</h1>
      <h1 onClick={() => changeTime(60)}>60</h1>
      <Time words={time * (250 / 60)} time={time} /></div>
}

export default App;
