import React, { useState } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

function App() {
    const [result, setName] = useState('');
    const onClick = button => {
        if(button === "="){
            calculate()
        }

        else if(button === "C"){
            reset()
        }
        else if(button === "CE"){
            backspace()
        }

        else {
            setresult(result + button);
        }
    };


    calculate = () => {
        var checkResult = ''
        if(result.includes('--')){
            checkResult = result.replace('--','+')
        }

        else {
            checkResult = result
        }

        try {
            setresult((eval(checkResult) || "" ) + "");
        } catch (e) {
            setresult("error")

        }
    };

    reset = () => {
        nsetresult(
            ""
        )
    };

    backspace = () => {
        setresult(
            result.slice(0, -1)
        )
    };

        return (
            <div>
                <div className="calculator-body">
                    <h1>React Calculator</h1>
                    <ResultComponent result={result}/>
                    <KeyPadComponent onClick={onClick}/>
                </div>
            </div>
        );
    }

export default App;
