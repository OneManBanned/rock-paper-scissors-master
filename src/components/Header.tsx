export default function Header({ scoreState }: any) {

    return (
        <>
            <div className="headerContainer">
                <img className="headerContainer_name" src="/assets/images/logo.svg" alt="rock paper scissors" />
                <div className="headerContainer_scoreBoard">
                    <h2 className="headerContainer_scoreBoard_name font-600">score</h2>
                    <div className="headerContainer_scoreBoard_score font-700">{scoreState}</div>
                </div>
            </div>
        </>
    )
}