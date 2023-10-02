export default function Choose({ playerChoice, options }: any) {
    return (
        <>
            <div className="gameContainer">
                <img className="gameContainer_tri" src="/assets/images/bg-triangle.svg" alt="" />
                {options.map((option: string, index: number) => {
                    return <button
                        key={index}
                        className={`choiceButton choiceButton_${option}`}
                        onClick={() => playerChoice(option)}>
                        <div>
                            <img src={`/assets/images/icon-${option}.svg`} alt={option} />
                        </div>
                    </button>
                })}
            </div>
        </>
    )
}