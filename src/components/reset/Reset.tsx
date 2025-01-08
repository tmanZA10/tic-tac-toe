import styles from './Reset.module.css'

type propTypes = {
  value: string,
  handler: Function,
}

function Reset({ value, handler, } : propTypes) {
  
  return (
    <button 
      onClick={()=>handler()} className={styles.resetButton}>{value}</button>
  )
}

export default Reset