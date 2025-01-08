import { useEffect, useState } from "react"
import { playerType } from "../../App"
import colors from '../../colors.json'
import styles from './Current.module.css'


type propTypes = {
    player: playerType
}

function Current( { player }:propTypes) {
  const [color, setColor] = useState<string>()

  useEffect(
    () => setColor(player === "O" ? colors.oColor : colors.xColor),
    [player]
  )
  return (
    <div className={styles.container}>
      current: 
      <span style={{color}} className={styles.current}>
        {player}
      </span>
    </div>
  )
}

export default Current