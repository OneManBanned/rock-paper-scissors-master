import { useState, useEffect } from "react"
import Modal from './components/Modal'
import ButtonModal from "./components/ButtonModal"
import Reveal from './components/Reveal'
import Header from './components/Header'
import Choose from "./components/Choose"
import '../dist/css/index.css'
import { original, bonus } from './data.tsx'

function App() {

  const gameModes = [original, bonus]
  const [score, setScore] = useState<number>(0)
  const [modal, setModal] = useState<boolean>(false)
  const [choice, setChoice] = useState<any>(undefined)
  const [currentGameArr, setCurrentGameArr] = useState<string[]>([])
  const [mode, setMode] = useState<number>(0)

  console.log(mode, original)
  const optionsArr: string[] = gameModes[mode].options
  const rules: string = gameModes[mode].rules

  useEffect(() => {
    if (choice) {
      const choiceIndex: number = optionsArr.indexOf(choice)
      const gameArr: string[] = optionsArr.slice(choiceIndex)
        .concat(optionsArr.slice(0, choiceIndex))
      setCurrentGameArr(gameArr)
    }
  }, [choice])

  return (
    <>
      <main>
        {/* Header with Score */}
        <Header scoreState={score} />

        {/* Main game logic */}
        {!choice
          ? <Choose
            playerChoice={setChoice}
            choice={choice}
            options={optionsArr} />
          : <Reveal
            currentGameArr={currentGameArr}
            setScore={setScore}
            setChoice={setChoice} />
        }

        <ButtonModal
          setMode={setMode}
          mode={mode}
          setModal={setModal} />
        <Modal
          rules={rules}
          openModal={modal}
          closeModal={() => setModal(false)}
        />

      </main>
    </>
  )
}

export default App