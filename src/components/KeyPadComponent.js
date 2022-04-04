import React, {} from 'react';

function App() {
        return (
            <div className="button">
                <button name="(" const onClick={e => props.onClick(e.target.name)}>(</button>
                <button name="CE" const onClick={e => props.onClick(e.target.name)}>CE</button>
                <button name=")" const onClick={e => props.onClick(e.target.name)}>)</button>
                <button name="C" const onClick={e => props.onClick(e.target.name)}>C</button><br/>


                <button name="1" const onClick={e => props.onClick(e.target.name)}>1</button>
                <button name="2" const onClick={e => props.onClick(e.target.name)}>2</button>
                <button name="3" const onClick={e => props.onClick(e.target.name)}>3</button>
                <button name="+" const onClick={e => props.onClick(e.target.name)}>+</button><br/>


                <button name="4" const onClick={e => props.onClick(e.target.name)}>4</button>
                <button name="5" const onClick={e => props.onClick(e.target.name)}>5</button>
                <button name="6" const onClick={e => props.onClick(e.target.name)}>6</button>
                <button name="-" const onClick={e => props.onClick(e.target.name)}>-</button><br/>

                <button name="7" const onClick={e => props.onClick(e.target.name)}>7</button>
                <button name="8" const onClick={e => props.onClick(e.target.name)}>8</button>
                <button name="9" const onClick={e => props.onClick(e.target.name)}>9</button>
                <button name="*" const onClick={e => props.onClick(e.target.name)}>x</button><br/>


                <button name="." const onClick={e => props.onClick(e.target.name)}>.</button>
                <button name="0" const onClick={e => props.onClick(e.target.name)}>0</button>
                <button name="=" const onClick={e => props.onClick(e.target.name)}>=</button>
                <button name="/" const onClick={e => props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
}


export default KeyPadComponent;
