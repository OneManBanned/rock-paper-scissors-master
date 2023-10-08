export default function Buttons({ setModal, setMode, mode }: any) {
  return (
    <div className="btnContainer">
      <button
        className="game_btn btn font-600"
        onClick={() => mode ? setMode(0) : setMode(1)}
      >mode</button>
      <button
        className="btn rules_btn font-600"
        onClick={() => setModal(true)}
      >rules</button>
    </div>
  )
}