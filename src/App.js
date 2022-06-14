import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [number1, setNumber1] = useState(10)
    const [number2, setNumber2] = useState(10)
    const changeNumber1 = (event) => {
        setNumber1(+event.target.value);
    }
    const changeNumber2 = (event) => {
        setNumber2(+event.target.value);
    }
    return (
        <div className="App">
            <h1>{number1}</h1>
            <input value={number1} onChange={changeNumber1}/>

            <input value={number2} onChange={changeNumber2}/>
            <h1>{number1}+{number2}={number1 + number2}</h1>
        </div>
    );
}

export default App;
