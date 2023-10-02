import { useState, useEffect } from "react"

import Modal from './components/Modal'
import Reveal from './components/Reveal'
import Header from './components/Header'
import Choose from "./components/Choose"

import '../dist/css/index.css'

function App() {

  const optionsArr: string[] = ['rock', 'paper', 'scissors']

  const [score, setScore] = useState<number>(0)
  const [modal, setModal] = useState<boolean>(false)
  const [choice, setChoice] = useState<any>(undefined)
  const [thisGameArr, setThisGameArr] = useState<string[]>([])


  useEffect(() => {
    if (choice) {
      const choiceIndex: number = optionsArr.indexOf(choice)
      const gameArr: string[] = optionsArr.slice(choiceIndex)
        .concat(optionsArr.slice(0, choiceIndex))
      setThisGameArr(gameArr)
    }
  }, [choice])

  return (
    <>
      <main>
        {/* Header with Score */}
        <Header scoreState={score} />

        {/* Main game logic */}
        {!choice
          ? <Choose playerChoice={setChoice} choice={choice} options={optionsArr} />
          : <Reveal thisGameArr={thisGameArr} />
        }

        {/* Button to open rules Modal */}
        <button
          className="rules_btn font-600"
          onClick={() => setModal(true)}
        >rules</button>

        {/* Rules Modal */}
        <Modal
          openModal={modal}
          closeModal={() => setModal(false)}
        />

      </main>
    </>
  )
}

export default App
