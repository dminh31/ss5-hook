import React, { useRef, useState } from 'react'

function UseRef() {
    const [number, setNumber] = useState(1)
    const obj = {
        count: 0,
    }
    const ref = useRef(0)
    const abc=useRef();
    const changeCount = () => {
        obj.count = obj.count + 1
        setNumber(number + 1)
        ref.current = ref.current + 1
    }
    console.log("11111111", obj.count);
    console.log("222222",ref.current);

    const addToDo=()=>{
        abc.current.focus()
    }
    return (
        <>
            <h2>Use Ref</h2>
            <button onClick={changeCount}>use ref</button> <br />
            <input 
            type="text"
            ref={abc}  />
            <button onClick={addToDo}>add</button>
        </>
    )
}
export default UseRef;