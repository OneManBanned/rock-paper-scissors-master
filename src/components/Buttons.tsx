import { CSSTransition } from "react-transition-group"

export default function Buttons(
  { showModal, setMode, mode }: { showModal: any; setMode: any; mode: number }) {
  return (
    <CSSTransition in={true} appear timeout={750} classNames='buttonsFadeIn' >
      <div className="btnContainer">
        <button className="game_btn btn font-600"
          onClick={() => mode ? setMode(0) : setMode(1)}>mode</button>
        <button className="btn rules_btn font-600"
          onClick={() => showModal(true)} >rules</button>
      </div>
    </CSSTransition>
  )
}