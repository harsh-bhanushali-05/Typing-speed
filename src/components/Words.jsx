import "./Wordsstyle.css";
import { useEffect, useRef, useState } from "react";
import getdat from "./getdat";
import makeString from "./makeString";
import Result from "./Result";
let tab = 0;
function Words(props) {
    const [left, setLeft] = useState([]);
    const [done, setDone] = useState("");
    const [time, SetTime] = useState(0.0);
    const [working, SetWorking] = useState(false);
    const [datapoints, Setdatapoints] = useState([]);
    const [test, setTest] = useState(false); // indicates weather the test is over or not 
    const divRef = useRef(null);
    function handleKeypress(event) {
        if (event.key === "Tab") {
            tab++;
            console.log(tab);
            if (tab == 1) {
                setTest(false);
                setLeft([]);
                setDone("");
                SetTime(0);
                SetWorking(false);
                Setdatapoints([]);
                intial();
            }
            divRef.current.focus();
        }
        else if (event.key === left[0]) {
            tab = 0;
            setDone((prev) => [...prev, left[0]]);
            setLeft((prev) => prev.slice(1));
            console.log(left.length);
        }
    };
    async function intial() {
        Setdatapoints([]);
        divRef.current.focus();
        try {
            const word = await getdat(props.words);
            await setLeft(makeString(word));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (working) {
            setTimeout(() => {
                SetTime((prev) => Math.round((prev + .1) * 100) / 100);
                console.log("I am working ");
                Setdatapoints((prev) => [...prev, { time: time, wordsPerSecond: Math.round((done.length / ((done.length + left.length) / props.words)) * 600 / time) / 10 }]);
            }, 100);
        }
    }, [time, working]);

    useEffect(() => {
        divRef.current.focus();
        if (done.length == 1) { // this code will run when the user first starts typing 
            console.log("First character");
            //starting the timer 
            SetWorking(true);
        }
        if (left.length == 0 && done.length != 0) {
            setTest(true);
            SetWorking(false);
            console.log("over"); // trigger the function which shold be done .... when the test is over 
        }
    }, [left]);
    useEffect(() => {
        divRef.current.focus();
        setTest(false);
        setLeft([]);
        setDone("");
        SetTime(0);
        SetWorking(false);
        Setdatapoints([]);
        intial();
    }, [props.words]);
    return (
        test == false ? <div
            style={{ outline: "none" }}
            ref={divRef}
            tabIndex="0"
            onKeyDown={handleKeypress}
        >
            <h2 className="right">{done}</h2>
            <h1 className={`cursor-line ${working ? '' : 'fade-in-out'}`}>
                |
            </h1>
            <h2 className="left">{left}</h2>
            <h1>{time}</h1>
        </div> : <div
            style={{ outline: "none" }}
            ref={divRef}
            tabIndex="0"
            onKeyDown={handleKeypress}
        ><Result time={time} words={props.words} data={datapoints} /></div>
    );
}
export default Words;