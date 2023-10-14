import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useState, useEffect, useRef } from 'react'

export default function Header(
    { scoreState, mode, currentMode: { options } }:
        { scoreState: number, mode: number, currentMode: { options: string[] } }) {

    const [animate, setAnimate] = useState<boolean>(true)
    useEffect(() => {
        setAnimate(prev => !prev)
    }, [mode])

    const originalRef = useRef(null)
    const bonusRef = useRef(null)

    const nodeRef = animate ? originalRef : bonusRef;

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={animate}
                timeout={400}
                nodeRef={nodeRef}
                classNames="animateHeader"
            >
                <div
                    ref={nodeRef}
                    className=" headerContainer">
                    <img className="headerContainer_name"
                        src={animate ? '/assets/images/logo.svg' : '/assets/images/logo-bonus.svg'}
                        alt={options.join(', ')} />
                    <div className="headerContainer_scoreBoard">
                        <h2 className="headerContainer_scoreBoard_name font-600">score</h2>
                        <div className="headerContainer_scoreBoard_score font-700">{scoreState}</div>
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}
