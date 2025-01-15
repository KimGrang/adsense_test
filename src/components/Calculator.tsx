import { useState } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + op);
    setIsNewNumber(true);
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation("");
      setIsNewNumber(true);
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
    setIsNewNumber(true);
  };

  return (
    <div className='calculator'>
      <div className='display'>
        <div className='equation'>{equation}</div>
        <div className='current'>{display}</div>
      </div>
      <div className='buttons'>
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("+")} className='operator'>
          +
        </button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("-")} className='operator'>
          -
        </button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("*")} className='operator'>
          ×
        </button>

        <button onClick={() => handleNumber("0")} className='zero'>
          0
        </button>
        <button onClick={() => handleNumber("00")} className='zero'>
          00
        </button>
        <button onClick={() => handleNumber(".")}>.</button>
        <button onClick={() => handleOperator("/")} className='operator'>
          /
        </button>

        <button onClick={clear} className='special'>
          C
        </button>
        <button onClick={calculate} className='operator equals'>
          =
        </button>
      </div>
    </div>
  );
};
