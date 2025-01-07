import { useEffect, useState } from 'react'
import { playerType } from '../../App'
// import styles from './ScoreCard.module.css'

type propTypes = {
  winner: playerType | null
}

interface Score {
  x:number,
  y:number
}

function ScoreCard({ winner }:propTypes) {

  const [score, setScore] = useState<Score>(
    {
      x:0,
      y:0
    }
  )

  const [message, setMessage] = useState<string>("")

  useEffect(
    ()=>{
      if(winner){
        setScore(
          (s:Score) => {
            winner === "X" ? s.x++ : s.y++
            return {...s}
          }
        )
        setMessage(winner + " wins!!!")
        setTimeout(()=>setMessage(""), 500)
      }
    },
    [winner]
  )

  return (
    <div>
      <div>
        <span>X</span>
        <span>{score.x}</span>
      </div>
      <div>
        {message}
      </div>
      <div>
        <span>Y</span>
        <span>{score.y}</span>
      </div>
    </div>
  )
}

export default ScoreCard