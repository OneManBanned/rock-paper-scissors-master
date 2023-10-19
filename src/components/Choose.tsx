import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { createRef, useRef, useState, useEffect } from 'react';
import { Item, original, bonus } from '../data.tsx'

export default function Choose(
    { choice, setChoice, mode }: { choice: string; setChoice: any; mode: number }) {

    const [isEnter, setIsEnter] = useState<boolean>(mode === 0 ? true : false)
    const [animateSelect, setAnimateSelect] = useState<boolean>(false)

    const originalRef = useRef(null), bonusRef = useRef(null)
    const nodeRef = isEnter ? originalRef : bonusRef;

    const currentArr = isEnter ? original.options : bonus.options
    const currentBackground = isEnter ? original.background : bonus.background
    const currentMode = isEnter ? 'original' : 'bonus'

    useEffect(() => { choice ? setAnimateSelect(true) : setAnimateSelect(false) }, [choice])
    useEffect(() => { mode === 0 ? setIsEnter(true) : setIsEnter(false) }, [mode])

    const optionsArr: Item[] = []
    currentArr.forEach(option => {
        const nextItem: Item = { name: option, nodeRef: createRef() }
        optionsArr.push(nextItem)
    })

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition key={isEnter} timeout={750} appear={true} nodeRef={nodeRef}
                classNames={'animateChoose'} >
                <div ref={nodeRef} className={isEnter
                    ? 'chooseContainer chooseContainer_original'
                    : 'chooseContainer chooseContainer_bonus'}>
                    <CSSTransition in={animateSelect} timeout={1000} classNames='animateFade' >
                        <img className="chooseContainer_bg" src={currentBackground} alt="" />
                    </CSSTransition>
                    {optionsArr.map(({ name, nodeRef }, index) => {
                        return (<CSSTransition key={index} in={animateSelect} nodeRef={nodeRef}
                            timeout={1000} appear classNames={name === choice
                                ? `animateSelect-${currentMode}-${name}`
                                : 'animateFade'} >
                            <button ref={nodeRef} className={isEnter
                                ? `button originalButton originalButton_${name} button_${name}`
                                : `button bonusButton bonusButton_${name} button_${name}`}
                                onClick={() => setChoice(name)}>
                            </button>
                        </CSSTransition>
                        )
                    }
                    )}
                </div >
            </CSSTransition >
        </SwitchTransition >
    )
}
