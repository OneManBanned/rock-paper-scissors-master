import { useState, useEffect } from "react"

export default function Reveal({ currentGameArr, setChoice, setScore }: any) {

    const [playerChoice, playerLoses, playerWins] = [...currentGameArr]
    const [housePick, setHousePick] = useState<number>(0)
    const [reveal, setReveal] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            if (!housePick) {
                setHousePick(Math.floor(Math.random() * 3))
                setReveal(true)
            }
            if (resultFunc() === 'win') {
                setScore((prevScore: number) => prevScore += 1)
            }
        }, 1000);
    }, [housePick])
    return (
        <div className={reveal ? "revealContainer revealed" : "revealContainer"}>
            {reveal &&
                <div className="revealContainer_result">
                    <p className="font-700">{`you ${resultFunc()}`}</p>
                    <button className="font-700" onClick={() => setChoice(undefined)}>play again</button>
                </div >
            }
            <div className="revealContainer_player">
                <div className={` button revealButton button_${playerChoice}`} >
                    <div>
                        <img src={`/assets/images/icon-${playerChoice}.svg`} alt={playerChoice} />
                    </div>
                </div>
                <h2 className="font-600">you picked</h2>
            </div>
            <div className="revealContainer_house">
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
        </div >
    )

    function resultFunc(): string {
        if (currentGameArr[housePick] === playerChoice) {
            return 'draw'
        } else if (currentGameArr[housePick] === playerLoses) {
            return 'lose'
        } else if (currentGameArr[housePick] === playerWins) {
            return 'win'
        }
        return '';
    }

}