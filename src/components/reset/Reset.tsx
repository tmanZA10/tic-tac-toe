// import styles from './Reset.moudule.css'

type propTypes = {
  value: string,
  handler: Function,
}

function Reset({ value, handler, } : propTypes) {
  
  return (
    <button 
      onClick={()=>handler()}
    >{value}</button>
  )
}

export default Reset