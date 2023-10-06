export default function ButtonModal(props: any) {
    return (
        <div className="btnContainer">
<button className="game_btn btn font-600">game</button>
        <button
          className="btn rules_btn font-600"
          onClick={() => props.setModal(true)}
        >rules</button>
</div>
    )
}