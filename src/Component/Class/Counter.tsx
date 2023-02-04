import React, { Component } from 'react'

type counterState = {
    count : number
}

type counterProps = {
    message : string
}

class Counter extends Component<counterProps,counterState>{
    constructor(props:counterProps){
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => ({count : prevState.count + 1}))
    }

    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.incrementCount}>Increment Count</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}

export default Counter