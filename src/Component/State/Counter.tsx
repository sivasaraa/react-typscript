import { useReducer } from "react"

const initialState = {
    count : 0
}

type stateProps = {
    count : number
}

type actionProps = {
    type : 'increment' | 'decrement',
    payload : number
}

type resetProps = {
    type : 'reset'
}

const reducer = (state : stateProps, action : actionProps | resetProps) => {
    switch(action.type){
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count : state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [newState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{newState.count}</div>
            <button onClick={() => dispatch({type:'increment',payload:5})}>Increment Count</button>
            <button onClick={() => dispatch({type:'decrement',payload:5})}>Decrement Count</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}