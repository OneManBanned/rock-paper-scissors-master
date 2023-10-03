export default function Choose({ playerChoice, options }: any) {
    return (
        <div className="chooseContainer">
            <img className="chooseContainer_tri" src="/assets/images/bg-triangle.svg" alt="" />
            {options.map((option: string, index: number) => {
                return <button
                    key={index}
                    className={`button choiceButton choiceButton_${option} button_${option}`}
                    onClick={() => playerChoice(option)}>
                    <div>
                        <img src={`/assets/images/icon-${option}.svg`} alt={option} />
                    </div>
                </button>
            })}
        </div>
    )
}
