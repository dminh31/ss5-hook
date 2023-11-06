import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [title,setTitle] = useState("")

    useEffect(()=>{
        console.log("thực hiện việc call API");
        // nơi call API để truyền dữ liệu
    },[title])
    console.log("22222");
    return (
        <>
        <h2>Use Effect</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>bam</button>
            <button onClick={()=>setTitle("get data title")}>click title</button>
        </>
    )
}

export default UseEffect;
