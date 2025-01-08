import { useEffect, useState } from 'react'
import { playerType } from '../../App'
// import Reset from '../reset/Reset'
import styles from './ScoreCard.module.css'
import colors from '../../colors.json'

type propTypes = {
  winner: playerType | null
}

interface Score {
  x:number,
  o:number
}

function ScoreCard({ winner }:propTypes) {

  const [score, setScore] = useState<Score>(
    {
      x:0,
      o:0
    }
  )

  const [message, setMessage] = useState<string>("")

  useEffect(
    ()=>{
      if(winner){
        setScore(
          (s:Score) => {
            winner === "X" ? s.x++ : s.o++
            return {...s}
          }
        )
        setMessage(winner + " wins!!!")
        setTimeout(()=>setMessage(""), 500)
      }
    },
    [winner]
  )

  // const resetScore = () => setScore({x:0, o:0})

  return (
    <>
      <div className={styles.scoreContainer}>
        <div className={styles.score} style={{color: colors.xColor}}>
          <span className={styles.player}>X</span>
          <span>-</span>
          <span>{score.x}</span>
        </div>
        <div className={message}>
          {message}
        </div>
        <div className={styles.score} style={{color: colors.oColor}}>
          <span>{score.o}</span>
          <span>-</span>
          <span className={styles.player}>O</span>
        </div>
      </div>
      {/* <Reset value={"⟳"} handler={resetScore} /> */}
    </>
  )
}

export default ScoreCard