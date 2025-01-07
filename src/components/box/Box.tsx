import { useContext } from 'react'
import styles from './Box.module.css'
import { gridContext, playerContext } from '../../App'

type propTypes = {
  position: [number, number]
}

function Box({ position } : propTypes) {
  const [grid, setGrid] = useContext(gridContext)
  const [player] = useContext(playerContext)
  const [x, y] = position


  const handleClick = () => {
    if (grid[x][y] === ""){
      setGrid(
        (g:string[][]) => {
          g[x][y] = player
          return {...g}
        }
      )
    }
  }

  return (
    <button onClick={handleClick}>{grid[x][y]}</button>
  )
}

export default Box