import { useState, useEffect } from "react"
import Modal from './components/Modal'
import Buttons from "./components/Buttons"
import Reveal from './components/Reveal'
import Header from './components/Header'
import Choose from "./components/Choose"
import '../dist/css/index.css'
import { original, bonus, Mode } from './data.tsx'

function App() {

  const gameModes = [original, bonus]

  const [score, setScore] = useState<number>(0)
  const [modal, setModal] = useState<boolean>(false)
  const [choice, setChoice] = useState<any>(undefined)
  const [currentGameArr, setCurrentGameArr] = useState<string[]>([])
  const [mode, setMode] = useState<number>(0)

  let currentMode: Mode = {
    options: gameModes[mode].options,
    rules: gameModes[mode].rules,
    rulesAlt: gameModes[mode].rulesAlt,
    title: gameModes[mode].title,
    background: gameModes[mode].background,
    original: gameModes[mode].original
  }

  useEffect(() => {
    currentMode = {
      options: gameModes[mode].options,
      rules: gameModes[mode].rules,
      rulesAlt: gameModes[mode].rulesAlt,
      title: gameModes[mode].title,
      background: gameModes[mode].background,
      original: gameModes[mode].original
    }
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
    <>
      <main>
        {/* Header with Score */}
        <Header scoreState={score} currentMode={currentMode} />

        {/* Main game logic */}
        {!choice
          ? <Choose setChoice={setChoice} choice={choice} currentMode={currentMode}
          />
          : <Reveal currentMode={currentMode} currentGameArr={currentGameArr} setScore={setScore} setChoice={setChoice} />
        }

        <Buttons setMode={setMode} mode={mode} setModal={setModal} />

        <Modal currentMode={currentMode} openModal={modal} closeModal={() => setModal(false)} />

      </main>
    </>
  )
}

export default App