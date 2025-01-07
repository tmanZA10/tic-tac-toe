import Box from '../box/Box'
import Reset from '../reset/Reset'
import styles from './GameGrid.module.css'

function Gamegrid() {
  return (
    <>
      <div className={styles.grid}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <Reset />
    </>
  )
}

export default Gamegrid