import React from 'react'

function Buttons(props) {
    return (
        <button className={props.className}>
            {props.name}
        </button>
    )
}

export default Buttons
