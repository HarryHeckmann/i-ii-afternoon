import React, {Component} from 'react'

class New extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render(){
        return(
            <div>
                <h1>Woo!!!</h1>
            </div>
        )
    }
}

export default New



// {(!this.state.isNew) ? <Main isNew={this.state.isNew}/> : <New isNew={this.state.isNew} />}
