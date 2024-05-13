import React, { useState } from 'react';

const Calculation = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultAdd, setResultAdd] = useState(0);
    const [resultSubtract, setResultSubtract] = useState(0);
    const [resultMultiply, setResultMultiply] = useState(0);
    const [resultDivide, setResultDivide] = useState(0);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'num1') {
            setNum1(parseFloat(value));
        } else if (name === 'num2') {
            setNum2(parseFloat(value));
        }
    }

    const add = () => {
        setResultAdd(num1 + num2);
    }

    const subtract = () => {
        setResultSubtract(num1 - num2);
    }

    const multiply = () => {
        setResultMultiply(num1 * num2);
    }

    const divide = () => {
        setResultDivide(num1 / num2);
    }

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                name="num1"
                value={num1}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="num2"
                value={num2}
                onChange={handleInputChange}
            />
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>

            <p>Result of Addition: {resultAdd}</p>
            <p>Result of Subtraction: {resultSubtract}</p>
            <p>Result of Multiplication: {resultMultiply}</p>
            <p>Result of Division: {resultDivide}</p>
        </div>
    );
}

export default Calculation;
