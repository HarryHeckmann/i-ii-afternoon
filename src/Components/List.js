import React from 'react'

export default function List(props) {
    return (
        <div>
            <li><strong>..Live in the city or country? </strong>{ props.array[props.index].cityOrCountry}</li>
            <li><strong>...Be indoors or outdoors? </strong>{ props.array[props.index].indoorsOrOutdoors}</li>
            <li><strong>...Travel everyday or never leave home? </strong>{ props.array[props.index].travel}</li>
            <li><strong>...Eat at Top's or Subway? </strong>{ props.array[props.index].topsOrSubway}</li>
            <li><strong>...Have a dog or a cat? </strong>{ props.array[props.index].dogOrCat}</li>
            
        </div>
    )
}