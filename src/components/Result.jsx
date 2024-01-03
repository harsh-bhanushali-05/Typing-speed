import LineChart from "./LineChart";
import "./graph.css";
function Result(props) {
    props.data.shift();
    console.log(props.data);
    let valid = (Math.round(props.words * 600 / props.time) / 10) > 5; // this is to test weather a variable is valid or not 
    return valid == true ? <div>
        <h1 className="graph">Time: {props.time} s</h1>
        <h1 className="graph">WPM: {Math.round(props.words * 600 / props.time) / 10}</h1>
        <LineChart data={props.data} />
    </div> : <h1 className="graph">The test is not valid</h1>
}
export default Result;