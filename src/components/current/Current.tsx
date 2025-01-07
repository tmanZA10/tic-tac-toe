import { playerType } from "../../App"


type propTypes = {
    player: playerType
}

function Current( { player }:propTypes) {
  return (
    <div>Current: {player}</div>
  )
}

export default Current