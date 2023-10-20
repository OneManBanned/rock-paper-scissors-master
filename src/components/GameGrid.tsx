import { useRef, useState, useEffect } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Reveal from './Reveal'
import Choose from "./Choose"

export default function GameGrid(
    { mode, choice, setChoice, currentGameArr, setScore }: {
        mode: number, choice: string, setChoice: any, currentGameArr: string[], setScore: any
    }) {

    const [hasChoose, setHasChoose] = useState<boolean>(false)

    const nodeRef = useRef(null)

    useEffect(() => { choice ? setHasChoose(true) : setHasChoose(false) }, [choice])

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition key={hasChoose} timeout={hasChoose ? 0 : 1000} noderef={nodeRef}
                classNames='stateAnimate'>
                <div ref={nodeRef} className='gameGridContainer'>{
                    !hasChoose
                        ? <Choose
                            choice={choice}
                            setChoice={setChoice}
                            mode={mode}
                        />
                        : <Reveal
                            currentGameArr={currentGameArr}
                            choice={choice}
                            setScore={setScore}
                            setChoice={setChoice} />
                } </div>
            </CSSTransition>
        </SwitchTransition>
    )
}