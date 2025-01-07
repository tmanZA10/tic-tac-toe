import Box from '../box/Box'
import styles from './GameGrid.module.css'

function Gamegrid() {
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