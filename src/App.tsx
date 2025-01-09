import { createContext, useState } from 'react'
import styles from './App.module.css'
import Gamegrid from './components/gamegrid/Gamegrid'
import Reset from './components/reset/Reset'
import ScoreCard from './components/scorecard/ScoreCard'
import Current from './components/current/Current'

export type playerType = "X" | "O"

export const playerContext = createContext<[playerType, Function]>(
  ["X", () =>{}]
)
export const gridContext = createContext<[string[][], Function]>(
  [[], () =>{}]
)


function App() {

  const [player, setPlayer] = useState<playerType>("X")
  const [grid, setGrid] = useState<string[][]>(
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  )
  const [winner, setWinner] = useState<playerType | null | "draw">(null)

  const resetGrid = () => setGrid(
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  )

  return (
    <playerContext.Provider value={[player, setPlayer]}>
      <gridContext.Provider value={[grid, setGrid]}>
        <div>
          <h1 className={styles.heading}>TicTacToe</h1>
          <ScoreCard winner={winner} />
          <Current player={player} />
          <Gamegrid setWinner={setWinner}/>
          <Reset value={"Reset Board"} handler={resetGrid} />
        </div>
      </gridContext.Provider>
    </playerContext.Provider>
  )
}

export default App