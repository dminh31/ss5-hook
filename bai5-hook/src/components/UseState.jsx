import React, { useState } from 'react'

function UseState() {
    // const [a, setA] = useState(); // trả về mảng []

    // const [c,d]=[1,3]
    // console.log(c);

    const [count, setCount] = useState(0)
    const [product, setProduct] = useState("")
    const [title, setTitle] = useState("")
    const [jobs, setJobs] = useState([]) // mảng chứa danh sách công việc
    const [job, setJob] = useState("")

    const increaseCount = () => {
        setCount(count + 1)
        console.log(count);
    }
    // thêm công việc
    const changeValue = (e) => {
        let newJob = e.target.value
        setJob(newJob)
    }

    const addToDo = () => {
        setJobs([...jobs, job])
        setJob("")

    }
    return (
        <>
            <h2>session 5</h2>
            <p>count : {count}</p>
            <button onClick={increaseCount}>click</button>
            <p>Bạn muốn mua sản phẩm gì? {product}</p>
            <button onClick={() => setProduct("Quần")}>Quần</button>
            <button onClick={() => setProduct("Áo")}>Áo</button>
            <button onClick={() => setProduct("Dép")}>Dép</button>
            <br />

            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <p>text vừa nhập: {title}</p>
            {/* ô input nhập danh sách công việc */}
            <input
                type="text"
                onChange={changeValue}
                value={job}
            />
            <button onClick={addToDo}>Thêm công việc</button>
            <ul>
                {jobs.map((item, index) => {
                    return <li key={index}> {item}</li>
                })}
            </ul>
        </>
    )
}
export default UseState;