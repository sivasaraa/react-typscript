import { useReducer } from "react"

const initialState = {
    count : 0
}

type stateprops = {
    count : number
}

type actionprops = {
    type: string,
    payload : number
}

const reducer = (state:stateprops,action:actionprops) => {
    switch(action.type){
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count : state.count - action.payload}
        default:
            return state
    }
}

export const Counter = () => {
    const [newstate, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>{newstate.count}</div>
            <button onClick={() => dispatch({type:'increment',payload:10})}>Increment 10</button>
            <button onClick={() => dispatch({type:'decrement',payload:10})}>Decrement 10</button>
        </div>
    )
}