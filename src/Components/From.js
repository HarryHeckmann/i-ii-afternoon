import React from 'react'

export default function From(props) {
    return (
        <div>
            <p><strong>From: </strong>{ props.array[props.index].from}</p>
        </div>
    )
}