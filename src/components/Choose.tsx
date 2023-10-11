import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { createRef, useRef, useState, useEffect } from 'react';
import { Mode, Item } from '../data.tsx'

export default function Choose(
    { setChoice, mode, currentMode: { background, options, original } }:
        { choice: string; setChoice: any; mode: number; currentMode: Mode }) {

    const chooseContainerRef = useRef(null)
    const [isEnter, setIsEnter] = useState(true)

    useEffect(() => {
        setIsEnter(prev => !prev)
    }, [mode])

    const optionsArr: Item[] = []
    options.forEach(option => {
        const nextItem: Item = {
            name: option,
            nodeRef: createRef()
        }
        optionsArr.push(nextItem)
    })

    return (
        <div className={original
            ? 'chooseContainer chooseContainer_original'
            : 'chooseContainer chooseContainer_bonus'}>
            <CSSTransition
                in={isEnter}
                timeout={1000}
                appear
                classNames="chooseContainer_load"
                nodeRef={chooseContainerRef}
                onEnter={() => setIsEnter(false)}>
                <img ref={chooseContainerRef} className="chooseContainer_bg" src={background} alt="" />
            </CSSTransition>
            <TransitionGroup className="options-list">
                {optionsArr.map(({ name, nodeRef }, index) => {
                    return (<CSSTransition
                        key={index}
                        in={true}
                        nodeRef={nodeRef}
                        timeout={1000}
                        unmountOnExit
                        appear
                        classNames={`${name}Animate`}
                    >
                        <button ref={nodeRef} className={original
                            ? `button originalButton originalButton_${name} button_${name}`
                            : `button bonusButton bonusButton_${name} button_${name}`}
                            onClick={() => setChoice(name)}> <div>
                                <img src={`/assets/images/icon-${name}.svg`} alt={name} />
                            </div>
                        </button>
                    </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div >
    )
}
