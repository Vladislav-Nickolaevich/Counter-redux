import React from 'react';
import './App.module.css';
import style from './App.module.css'
import  {CounterWrapper} from "./fiches/CounterWrapper";


function App() {
    return (
        <div className={style.counterStyle}>
            <CounterWrapper/>
        </div>
    );
}

export default App;
