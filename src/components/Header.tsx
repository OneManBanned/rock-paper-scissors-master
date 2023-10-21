import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useState, useEffect, useRef } from 'react'
import { original, bonus } from '../data'

export default function Header(
    { score, mode, altText }: { score: number, mode: number, altText: string }) {

    const [animate, setAnimate] = useState<boolean>(true)

    const originalRef = useRef(null), bonusRef = useRef(null)
    const nodeRef = animate ? originalRef : bonusRef;

    useEffect(() => { setAnimate(prev => !prev) }, [mode])

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition key={animate ? 'original' : 'bonus'}
                timeout={400} nodeRef={nodeRef} classNames="animateHeader" >
                <CSSTransition in={animate} appear timeout={750}
                    classNames="animateHeaderFade" >
                    <div ref={nodeRef} className="headerContainer">
                        <img className="headerContainer_name" alt={altText}
                            src={animate ? original.img : bonus.img}
                        />
                        <div className="headerContainer_scoreBoard">
                            <h2 className="headerContainer_scoreBoard_name font-600">score</h2>
                            <div className="headerContainer_scoreBoard_score font-700">{score}</div>
                        </div>
                    </div>
                </CSSTransition>
            </CSSTransition>
        </SwitchTransition>
    )
}
