import { useContext, useState } from 'react'
import styles from './Box.module.css'
import { gridContext, playerContext, playerType } from '../../App'
import colors from '../../colors.json'

type propTypes = {
  position: [number, number]
}

function Box({ position } : propTypes) {
  const [color, setColor] = useState<string>()
  const [grid, setGrid] = useContext(gridContext)
  const [player,setPlayer] = useContext(playerContext)
  const [x, y] = position


  const handleClick = () => {
    if (grid[x][y] === ""){
      setGrid(
        (g:string[][]) => {
          g[x][y] = player
          return [...g]
        }
      )
      setColor(player === "X" ? colors.xColor : colors.oColor)
      setPlayer(
        (p:playerType) => p === "X" ? "O" : "X"
      )
    }
  }

  return (
    <button 
      onClick={handleClick} 
      style={{color}}
      className={styles.box}
    >{
      grid[x][y]}
    </button>
  )
}

export default Box