import React, { useReducer } from 'react'

function UseReducer() {

    const reducer = (state, action) => {
        // if (action.action == "ASC") {
        //     return state + 1
        // }else if(action.action == "DESC"){
        //     return state - 1
        // }
        switch (action.action) {
            case "ASC":
                return state + 1
            case "DESC":
                return state - 1
            default:
                return state
        }
    }
    const [abc, ditpach] = useReducer(reducer, 0)

    const handleCount = () => {
        ditpach("ASC")
    }

    return (
        <>
            <h2>UseReducer</h2>
            <p>count : {abc}</p>
            <button onClick={handleCount}> tăng count</button>
            <button onClick={() => ditpach("DESC")}> giảm count</button>
        </>

    )
}
export default UseReducer