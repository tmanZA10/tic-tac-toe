import { playerType } from "./App";

export function determineWinner(grid:string[][]):playerType | null{
  

    for (let g of grid){
      if (g.every(v => v ==="")) continue
      if (g.every(v => v===g[0])) return g[0]==="X" ? "X" :"O"
    }
    
    let cords:string[];
    for (let i=0; i <3; i++){
      
    cords = [grid[0][i], grid[1][i], grid[2][i]]

      if(cords.every(v => v ==="")) continue
      
      if (cords.every(v => v === cords[0])) return cords[0]==="X" ? "X" :"O"
    }

    cords = [grid[0][0], grid[1][1], grid[2][2],]
    if(cords.every(v => v ==="")) return null
      
    if (cords.every(v => v === cords[0])) return cords[0]==="X" ? "X" :"O"

    cords = [grid[2][0], grid[1][1], grid[0][2],]
    if(cords.every(v => v ==="")) return null
      
    if (cords.every(v => v === cords[0])) return cords[0]==="X" ? "X" :"O"
    
    return null
  }