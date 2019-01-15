import React from 'react'

export default function Name(props) {
    return (
        <div>
            <h1>{ props.array[props.index].name}</h1>
        </div>
    )
}