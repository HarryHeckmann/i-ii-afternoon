import React from 'react'

export default function FunFact(props) {
    return (
        <div>
            <p><strong>Fun fact: </strong>{ props.array[props.index].funFact}</p>
        </div>
    )
}