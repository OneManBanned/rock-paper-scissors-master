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
            <CSSTransition key={isSelected} timeout={isSelected ? 0 : 1000} nodeRef={nodeRef}
                classNames='stateAnimate'>
                <div ref={nodeRef} className='gameGridContainer'>{
                    !isSelected
                        ? <Choose
                            choice={choice}
                            setChoice={setChoice}
                            mode={mode}
                        />
                        : <Reveal
                            options={currentMode.options}
                            currentGameArr={currentGameArr}
                            choice={choice}
                            setScore={setScore}
                            setChoice={setChoice} />
                } </div>
            </CSSTransition>
        </SwitchTransition>
    )
}