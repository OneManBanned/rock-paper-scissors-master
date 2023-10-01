import { useState } from "react"
import Modal from './components/Modal'
import Header from './components/Header'
import '../dist/css/index.css'
import { newGame } from './interface/interface'
const g = new newGame(0)

function App() {

  const [score, setScore] = useState<number>(g.currentScore)
  const [modal, setModal] = useState<boolean>(false)

  return (
    <>
      <main>
        <Header scoreState={score} />

        <div className="gameContainer">
          <img className="gameContainer_tri" src="/assets/images/bg-triangle.svg" alt="" />
          {/* Rock */}
          <button className="choiceButton choiceButton_rock" value="rock" onClick={(e) => console.log(e)}>
            <div>
              <img src="/assets/images/icon-rock.svg" alt="" />
            </div>
          </button>
          {/* Paper */}
          <button className="choiceButton choiceButton_paper" value="paper" onClick={(e) => console.log(e)}>
            <div>
              <img src="/assets/images/icon-paper.svg" alt="" />
            </div>
          </button>
          {/* Scissors */}
          <button className="choiceButton choiceButton_scissors" value="scissors" onClick={(e) => console.log(e)}>
            <div>
              <img src="/assets/images/icon-scissors.svg" alt="" />
            </div>
          </button>
        </div>
        <button
          className="rules_btn font-600"
          onClick={() => setModal(true)}
        >rules</button>
        <Modal
          openModal={modal}
          closeModal={() => setModal(false)}
        />
      </main>
    </>
  )
}

export default App
