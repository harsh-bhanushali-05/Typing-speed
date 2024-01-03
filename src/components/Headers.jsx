import "./styles.css";
function Headers(props) {
    return (
        <div className="nav-settings">
            <a href="https://ibb.co/nzKYJ2n"><img src="https://i.ibb.co/9sd15XV/logo.png" alt="logo" border="0" width="60px" className="logo-settings" /></a>
            <h1 className="typing">Typing...</h1>
            <h4> Mode: </h4>
            <h4 onClick={() => props.changeMode('words')}> Words</h4>
            <h4 onClick={() => props.changeMode('Time')}> Time</h4>
            <h4> Paragraph: </h4>
            <h3 className=" topBar" onClick={props.pun}>   punctuation   </h3>
            <h3 className=" topBar" onClick={props.number}>numbers</h3>
            {props.Mode == 'words' ? <div className="mode">
                <p>Words:</p>
                <a className="design-mode" onClick={() => { props.Numberofwords(10) }}>10</a>
                <a className="design-mode" onClick={() => { props.Numberofwords(15) }}>15</a>
                <a className="design-mode" onClick={() => { props.Numberofwords(20) }}>20</a>
                <a className="design-mode" onClick={() => { props.Numberofwords(30) }}>30</a>
                <a className="design-mode" onClick={() => { props.Numberofwords(60) }}>60</a>
            </div> : <div className="mode">
                <p>Time:</p>
                <a className="design-mode" onClick={() => { props.changeTime(15) }}>15</a>
                <a className="design-mode" onClick={() => { props.changeTime(25) }}>25</a>
                <a className="design-mode" onClick={() => { props.changeTime(35) }}>35</a>
                <a className="design-mode" onClick={() => { props.changeTime(45) }}>45</a>
                <a className="design-mode" onClick={() => { props.changeTime(60) }}>60</a>
            </div>}
        </div>
    );
}
export default Headers;


