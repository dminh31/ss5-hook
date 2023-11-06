import React, { useState, useRef } from 'react'
import './Todo.css'
export default function ToDoList() {
    const [jobs, setJobs] = useState([
        {
            name: "run",
            id: 1,
            status: false
        },
        {
            name: "do",
            id: 2,
            status: false
        },
        {
            name: "bike",
            id: 3,
            status: false
        },
    ])
    const [job, setJob] = useState([{
        name: "",
        id: "",
        status: false
    }])

    const changeStatus = (id) => {
        console.log(id);
        let index = jobs.findIndex((item) => {
            return item.id == id

        })
        let arr = [...jobs]
        arr[index].status = !arr[index].status

        setJobs(arr)
    }
    const uuid = () => {
        return Math.floor(Math.random() * 99999)
    }
    const changeValue = (e) => {
        let newArr = [...job]
        ref.current = e.target.value
        newArr.name = e.target.value
        newArr.id = uuid()
        setJob(newArr)
        // console.log(newArr);
    }
    const addJob = () => {
        if (ref.current != "") {
            setJobs([...jobs, job])
            ref.current = ""
        }

    }
    const deleteJob = (id) => {
        let index = jobs.findIndex((item) => {
            return item.id == id

        })
        let newArr = [...jobs]
        newArr.splice(index, 1)
        setJobs(newArr)
    }
    const ref = useRef("")
    return (
        <>
            <div className='form'>
                <h1>Todolist</h1>
                <hr />
                <ul>
                    {
                        jobs.map((item, index) => {
                            let check = item.status
                            let checker = check ? "line-through" : ""
                            // console.log(check);
                            return <li key={index}  >
                                <p style={{ textDecoration: checker }} >{item.name}</p>
                                <input
                                    type="checkbox"
                                    checked={item.status}
                                    onChange={() => changeStatus(item.id)}
                                />
                                <button className='btn' onClick={() => { deleteJob(item.id) }}><span class="material-symbols-outlined">
                                    delete
                                </span></button>
                            </li>
                        })
                    }
                </ul>
                <input type="text" onChange={changeValue} value={ref.current} />
                <button onClick={addJob}>ADD</button>
            </div>

        </>
    )
}