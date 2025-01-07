import { useContext } from 'react'
// import styles from './Box.module.css'
import { gridContext, playerContext, playerType } from '../../App'

type propTypes = {
  position: [number, number]
}

function Box({ position } : propTypes) {
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
    }
    setPlayer(
      (p:playerType) => p === "X" ? "Y" : "X"
    )
  }

  return (
    <button onClick={handleClick}>{grid[x][y]}</button>
  )
}

export default Box