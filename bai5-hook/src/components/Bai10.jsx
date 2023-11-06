import React, { useState } from 'react'

function Bai10() {
    const [count, setCount] = useState(0)
    const changeCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h2>Bai 1</h2>
            <p>Count : {count} </p>
            <button onClick={changeCount}>click</button>
        </>
    )
}
export default Bai10;