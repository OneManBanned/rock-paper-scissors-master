import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { createRef, useRef, useState, useEffect } from 'react';
import { Item, original, bonus } from '../data.tsx'

export default function Choose(
    { choice, setChoice, mode }:
        { choice: string; setChoice: any; mode: number }) {

    const [isEnter, setIsEnter] = useState<boolean>(mode === 0 ? true : false)
    const [animateSelect, setAnimateSelet] = useState<boolean>(false)

    const originalRef = useRef(null)
    const bonusRef = useRef(null)

    const nodeRef = isEnter ? originalRef : bonusRef;
    const currentArr = isEnter ? original.options : bonus.options
    const currentBackground = isEnter ? original.background : bonus.background
    console.log(choice)

    useEffect(() => {
        choice ? setAnimateSelet(true) : setAnimateSelet(false)
    }, [choice])

    useEffect(() => {
        mode === 0 ? setIsEnter(true) : setIsEnter(false)
    }, [mode])

    const optionsArr: Item[] = []
    currentArr.forEach(option => {
        const nextItem: Item = {
            name: option,
            nodeRef: createRef()
        }
        optionsArr.push(nextItem)
    })

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={isEnter}
                timeout={500}
                appear={true}
                nodeRef={nodeRef}
                classNames={'animateChoose'}
            >
                <div
                    ref={nodeRef}
                    className={isEnter
                        ? 'chooseContainer chooseContainer_original'
                        : 'chooseContainer chooseContainer_bonus'}>
                    <img className="chooseContainer_bg" src={currentBackground} alt="" />
                    {optionsArr.map(({ name, nodeRef }, index) => {
                        console.log(animateSelect)
                        return (
                            <CSSTransition
                                key={index}
                                in={animateSelect}
                                nodeRef={nodeRef}
                                timeout={1000}
                                appear
                                classNames={name === choice ? `animateSelect` : 'animateFade'}
                            >
                                <div ref={nodeRef}>
                                    <button
                                        className={isEnter
                                            ? `button originalButton originalButton_${name} button_${name}`
                                            : `button bonusButton bonusButton_${name} button_${name}`}
                                        onClick={() => setChoice(name)}> <div>
                                            <img src={`/assets/images/icon-${name}.svg`} alt={name} />
                                        </div>
                                    </button>
                                </div>
                            </CSSTransition>
                        )
                    }
                    )}
                </div >
            </CSSTransition >
        </SwitchTransition >
    )
}
