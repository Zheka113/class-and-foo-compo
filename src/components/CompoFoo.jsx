import React, { useState } from 'react';

const FooCompo = ()=>{
    let [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count + 1)
        }
    const decrement = ()=>{
        setCount(count - 1)
        }
    return (
        <div>
            <h1>I am Foo compo</h1>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default FooCompo;