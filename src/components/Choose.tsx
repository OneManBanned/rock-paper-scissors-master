export default function Choose({ setChoice, currentMode: { background, options, original } }: any) {
    return (
        <div className={original
            ? 'chooseContainer chooseContainer_original'
            : 'chooseContainer chooseContainer_bonus'}>
            <img className="chooseContainer_bg" src={background} alt="" />
            {options.map((option: string, index: number) => {
                return <button
                    key={index}
                    className={original
                        ? `button originalButton originalButton_${option} button_${option}`
                        : `button bonusButton bonusButton_${option} button_${option}`
                    }
                    onClick={() => setChoice(option)}>
                    <div>
                        <img src={`/assets/images/icon-${option}.svg`} alt={option} />
                    </div>
                </button>
            })}
        </div >
    )
}
