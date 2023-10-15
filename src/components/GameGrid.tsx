import { useRef, useState, useEffect } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { Mode } from '../data'
import Reveal from './Reveal'
import Choose from "./Choose"

export default function GameGrid(
    { mode, choice, setChoice, currentMode, currentGameArr, setScore }: {
        mode: number, choice: string, setChoice: any, currentMode: Mode, currentGameArr: string[],
        setScore: any
    }) {

    const [isSelected, setIsSelected] = useState<boolean>(false)
    const nodeRef = useRef(null)

    useEffect(() => {
        choice ? setIsSelected(true) : setIsSelected(false)
    }, [choice])

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={isSelected}
                timeout={2000}
                classNames='stateAnimate'
                nodeRef={nodeRef} >
                <div ref={nodeRef} className='gameGridContainer'>{
                    !isSelected
                        ? <Choose
                            choice={choice}
                            setChoice={setChoice}
                            mode={mode}
                        />
                        : <Reveal
                            currentMode={currentMode}
                            currentGameArr={currentGameArr}
                            setScore={setScore}
                            setChoice={setChoice} />
                } </div>
            </CSSTransition>
        </SwitchTransition>
    )
}