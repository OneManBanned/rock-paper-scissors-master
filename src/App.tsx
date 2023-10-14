import { useState, useEffect, useRef } from "react"
import Modal from './components/Modal'
import Buttons from "./components/Buttons"
import Reveal from './components/Reveal'
import Header from './components/Header'
import Choose from "./components/Choose"
import '../dist/css/index.css'
import { original, bonus, Mode } from './data.tsx'
import { CSSTransition, SwitchTransition } from "react-transition-group"

function App() {

  const gameModes = [original, bonus]

  const [score, setScore] = useState<number>(0)
  const [modal, setModal] = useState<boolean>(false)
  const [choice, setChoice] = useState<any>(undefined)
  const [currentGameArr, setCurrentGameArr] = useState<string[]>([])
  const [mode, setMode] = useState<number>(0)
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const nodeRef = useRef(null)

  let currentMode: Mode = {
    options: gameModes[mode].options,
    rules: gameModes[mode].rules,
    rulesAlt: gameModes[mode].rulesAlt,
    background: gameModes[mode].background,
    original: gameModes[mode].original
  }

  useEffect(() => {
    choice ? setIsSelected(true) : setIsSelected(false)
  }, [choice])

  useEffect(() => {
    currentMode = {
      options: gameModes[mode].options,
      rules: gameModes[mode].rules,
      rulesAlt: gameModes[mode].rulesAlt,
      background: gameModes[mode].background,
      original: gameModes[mode].original
    }
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
    <>
      <main>
        {/* Header with Score */}
        <Header scoreState={score} mode={mode} currentMode={currentMode} />

        {/* Main game logic */}
        <SwitchTransition mode={'out-in'}>
          <CSSTransition
            key={isSelected}
            timeout={1000}
            classNames='stateAnimate'
            nodeRef={nodeRef} >
            <div ref={nodeRef}>{!isSelected
              ? <Choose choice={choice} setChoice={setChoice} mode={mode}
              />
              : <Reveal currentMode={currentMode} currentGameArr={currentGameArr} setScore={setScore} setChoice={setChoice} />
            } </div>
          </CSSTransition>
        </SwitchTransition>

        <Buttons setMode={setMode} mode={mode} setModal={setModal} />

        <Modal currentMode={currentMode} openModal={modal} closeModal={() => setModal(false)} />

      </main>
    </>
  )
}

export default App