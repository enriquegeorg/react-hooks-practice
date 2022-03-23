import React, { useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    // this function set state receiving a key and a value
    // const setValue = (key, value) => {
    //     setState({
    //         ...state,
    //         [key]: value
    //     })
    // }

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store