import { CSSTransition, TransitionGroup } from "react-transition-group"
import { createRef } from "react"
import { Item } from '../data'

export default function VictoryShadow() {

    const divArray: Item[] = [
        { name: 'One', nodeRef: createRef() },
        { name: 'Two', nodeRef: createRef() },
        { name: 'Three', nodeRef: createRef() }
    ]

    return (<>
        <TransitionGroup className='shadowGroup'>
            {divArray.map(({ name, nodeRef }, index) => {
                return (<CSSTransition key={index} in={true} appear nodeRef={nodeRef}
                    timeout={1250} classNames={`shadowAnimate${name}`} >
                    <div ref={nodeRef} ></div>
                </CSSTransition>)
            })}
        </TransitionGroup>
    </>)
}