import React, { useState } from 'react'

function Bai11() {

    const [text, setText] = useState("")
    const renderText = text.split(" ").join("").length

    const countValue = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <h2>Bai 2</h2>
            <input type="text" onChange={countValue} />
            <p>Số kí tự là: {renderText} </p>
        </>
    )
}
export default Bai11;