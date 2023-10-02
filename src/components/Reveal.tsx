export default function Choose({ thisGameArr }: any) {
    console.log(thisGameArr)
    return (
        <>
            <div style={{ color: 'white' }}>{thisGameArr[0]}</div>
            <button className={`choiceButton choiceButton_${thisGameArr[0]}`} >
                <div>
                    <img src={`/assets/images/icon-${thisGameArr[0]}.svg`} alt={thisGameArr[0]} />
                </div>
            </button>
        </>
    )
}