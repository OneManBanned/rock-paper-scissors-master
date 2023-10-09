import { useState, useEffect, useRef } from "react"
import { CSSTransition } from 'react-transition-group'

export default function Reveal({ currentGameArr, setChoice, setScore, currentMode: { options } }: any) {

    const [playerChoice] = [...currentGameArr]
    const [housePick, setHousePick] = useState<number>(0)
    const [reveal, setReveal] = useState<boolean>(false)

    const resultRef = useRef(null)
    const playerRef = useRef(null)
    const houseRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            if (!housePick) {
                setHousePick(Math.floor(Math.random() * options.length))
                setReveal(true)
            }
            if (resultFunc() === 'win') {
                setScore((prevScore: number) => prevScore += 1)
            }
        }, 1000);
    }, [housePick])


    return (
        <div className={reveal ? "revealContainer revealed" : "revealContainer"}>
            <CSSTransition
                in={reveal}
                timeout={1000}
                classNames='revealContainer_animate'
                nodeRef={resultRef} >
                <div ref={resultRef}
                    className={reveal
                        ? "revealContainer_result"
                        : 'revealContainer_result-notRevealed'}>
                    <p className="font-700">{`you ${resultFunc()}`}</p>
                    <button className="font-700" onClick={() => setChoice(undefined)}>play again</button>
                </div >
            </CSSTransition>
            <CSSTransition
                in={reveal}
                timeout={1000}
                classNames='revealContainer_playerAnimate'
                nodeRef={playerRef}
            >
                <div ref={playerRef} className="revealContainer_player">
                    <div className={` button revealButton button_${playerChoice}`} >
                        <div>
                            <img src={`/assets/images/icon-${playerChoice}.svg`} alt={playerChoice} />
                        </div>
                    </div>
                    <h2 className="font-600">you picked</h2>
                </div>
            </CSSTransition>
            <CSSTransition
                in={reveal}
                timeout={1000}
                classNames='revealContainer_houseAnimate'
                nodeRef={houseRef}
            >
                <div ref={houseRef} className="revealContainer_house">
                    <div
                        className={reveal
                            ? ` button revealButton button_${currentGameArr[housePick]}`
                            : 'button revealButton revealButton_blank'} >
                        <div>
                            {reveal &&
                                <img src={`/assets/images/icon-${currentGameArr[housePick]}.svg`} alt={currentGameArr[housePick]} />
                            }
                        </div>
                    </div>
                    <h2 className="font-600">the house picked</h2>
                </div>
            </CSSTransition>
        </div >
    )

    function resultFunc(): string {
        if (housePick === 0) {
            return 'draw'
        } else if (housePick % 2 === 1) {
            return 'lose'
        } else if (housePick % 2 === 0) {
            return 'win'
        }
        return '';
    }

}