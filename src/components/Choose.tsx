import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { createRef } from 'react';
import { Mode, Item } from '../data.tsx'

export default function Choose(
    { setChoice, currentMode: { background, options, original } }:
        { setChoice: any; currentMode: Mode }) {

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
            <img className="chooseContainer_bg" src={background} alt="" />
            <TransitionGroup className="options-list">
                {optionsArr.map(({ name, nodeRef }, index) => {
                    return (<CSSTransition
                        in={true}
                        timeout={1000}
                        appear={true}
                        classNames="chooseContainer_pick"
                        nodeRef={nodeRef}
                        key={index} >
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
        </div >)
}