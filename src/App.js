import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [number1, setNumber1] = useState(10)
    const [number2, setNumber2] = useState(10)
    const [operand, setOperand] = useState('+')
    const [result,setResult] = useState(0)
    const changeNumber1 = (event) => {
        setNumber1(+event.target.value);
        changeNumberOfOperand(+event.target.value, number2, operand)
    }
    const changeNumber2 = (event) => {
        setNumber2(+event.target.value);
        changeNumberOfOperand(number1,+event.target.value,operand)
    }


    const changeOperand = (event) => {
        const operand = event.target.value;
        changeNumberOfOperand(number1,number2, operand)
        setOperand(operand)
    }

    const changeNumberOfOperand = (n1,n2,o) => {

        if (o === '+') setResult(n1 + n2)
        if (o === '-') setResult(n1 - n2)
        if (o === '/') setResult(n1 / n2)
        if (o === '*') setResult(n1 * n2)



    }
    return (
        <div className="App">
            <h1>{number1}</h1>
            <input value={number1} onChange={changeNumber1}/>

            <select value={operand} onChange={changeOperand}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='/'>/</option>
                <option value='*'>*</option>

            </select>
            <input value={number2} onChange={changeNumber2}/>
            <h1>{number1}{operand}{number2}={result}</h1>
        </div>
    );
}

export default App;
