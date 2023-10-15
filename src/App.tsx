import { useState, useEffect, } from "react"
import Header from './components/Header'
import GameGrid from './components/GameGrid'
import Modal from './components/Modal'
import Buttons from "./components/Buttons"
import '../dist/css/index.css'
import { original, bonus } from './data.tsx'

function App() {

  const gameModes = [original, bonus]

  const [score, setScore] = useState<number>(0)
  const [modal, setModal] = useState<boolean>(false)
  const [choice, setChoice] = useState<any>(undefined)
  const [currentGameArr, setCurrentGameArr] = useState<string[]>([])
  const [mode, setMode] = useState<number>(0)

  let currentMode = gameModes[mode]

  useEffect(() => {
    currentMode = gameModes[mode]
    setChoice(undefined)
  }, [mode])

  useEffect(() => {
    let { options } = currentMode
    if (choice) {
      const choiceIndex: number = options.indexOf(choice)
      const gameArr: string[] = options.slice(choiceIndex)
        .concat(options.slice(0, choiceIndex))
      setCurrentGameArr(gameArr)
    }
  }, [choice])

  return (
    <main>

      <Header
        scoreState={score}
        mode={mode}
        currentMode={currentMode} />

      <GameGrid
        mode={mode}
        choice={choice}
        setChoice={setChoice}
        currentMode={currentMode}
        currentGameArr={currentGameArr}
        setScore={setScore} />

      <Buttons
        setMode={setMode}
        mode={mode}
        setModal={setModal} />

      <Modal
        currentMode={currentMode}
        openModal={modal}
        closeModal={() => setModal(false)} />

    </main>
  )
}

export default App