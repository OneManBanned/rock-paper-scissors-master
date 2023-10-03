import { useState } from "react"

export default function Reveal({ thisGameArr, setChoice, housePick, setScore, choice }: any) {


    // useMemo(() => {
    //     console.log(thisGameArr[housePick], playerWins)
    //     if (thisGameArr[housePick] === playerWins) {
    //         setScore((prevScore: number) => prevScore += 1)
    //     }
    // }, [choice])

    return (
        <div className="revealContainer">
            <div className="revealContainer_result">
                <p>{`you ${resultFunc()}`}</p>
                <button onClick={() => setChoice(undefined)}>play again</button>
            </div>
            <div className={`revealContainer_player button revealButton button_${thisGameArr[0]}`} >
                <div>
                    <img src={`/assets/images/icon-${thisGameArr[0]}.svg`} alt={thisGameArr[0]} />
                </div>
            </div>
            <div className={`revealContainer_house button revealButton button_${thisGameArr[housePick]}`} >
                <div>
                    <img src={`/assets/images/icon-${thisGameArr[housePick]}.svg`} alt={thisGameArr[housePick]} />
                </div>
            </div>
        </div>
    )

    function resultFunc(): string {
        if (thisGameArr[housePick] === thisGameArr[0]) {
            return 'draw'
        } else if (thisGameArr[housePick] === thisGameArr[1]) {
            return 'lose'
        } else if (thisGameArr[housePick] === thisGameArr[2]) {
            return 'win'
        }
        return '';
    }

}