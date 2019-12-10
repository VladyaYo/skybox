import React, { useState, useCallback } from 'react';
import { Transition } from "react-transition-group"
import  Animation  from "../assets/styles/Animation"


const Pricing = props => {

    const [animate, setAnimate] = useState(false)
    const doAnimate = useCallback(() => {
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 3000)
    }, [])

    return (
        <div>
            <Transition in={animate} timeout={500}>
                {(state) => (
                        <Animation state={state}>Hello</Animation>
                )}
            </Transition>
            <button onClick={doAnimate}>Animate</button>
        </div>
    )
};


export default Pricing