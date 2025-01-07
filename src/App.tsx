import styles from './App.module.css'
import Gamegrid from './components/gamegrid/Gamegrid'
import Reset from './components/reset/Reset'
import ScoreCard from './components/scorecard/ScoreCard'

function App() {
  return (
    <div>
      <h1>TicTacToe</h1>
      <ScoreCard />
      <Gamegrid />
      <Reset />
    </div>
  )
}

export default App