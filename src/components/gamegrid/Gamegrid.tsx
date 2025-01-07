import { useContext, useEffect } from 'react'
import Box from '../box/Box'
import styles from './GameGrid.module.css'
import { gridContext } from '../../App'
import { determineWinner } from '../../Util'

type propTypes = {
  setWinner: Function
}

function Gamegrid({ setWinner } : propTypes) {

  const [grid] = useContext(gridContext)
  

  useEffect(
    () => {
      setWinner(determineWinner(grid))
    },
    [grid]
  )
  return (
    <>
      <div className={styles.grid}>
        <Box position={ [0, 0] } />
        <Box position={ [0, 1] } />
        <Box position={ [0, 2] } />
        <Box position={ [1, 0] } />
        <Box position={ [1, 1] } />
        <Box position={ [1, 2] } />
        <Box position={ [2, 0] } />
        <Box position={ [2, 1] } />
        <Box position={ [2, 2] } />
      </div>
    </>
  )
}

export default Gamegrid