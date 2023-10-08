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
    title: gameModes[mode].title,
    background: gameModes[mode].background,
  }

  useEffect(() => {
    currentMode = {
      options: gameModes[mode].options,
      rules: gameModes[mode].rules,
      title: gameModes[mode].title,
      background: gameModes[mode].background
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
        <Header scoreState={score} title={currentMode.title} />

        {/* Main game logic */}
        {!choice
          ? <Choose
            playerChoice={setChoice}
            choice={choice}
            background={currentMode.background}
            options={currentMode.options} />
          : <Reveal
            currentGameArr={currentGameArr}
            setScore={setScore}
            setChoice={setChoice} />
        }

        <Buttons
          setMode={setMode}
          mode={mode}
          setModal={setModal} />
        <Modal
          rulesImg={currentMode.rules}
          openModal={modal}
          closeModal={() => setModal(false)}
        />

      </main>
    </>
  )
}

export default App