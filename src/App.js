
import React, { useState,useEffect } from 'react'

function App() {
  const[player1Score,setPlayer1Score]=useState(0)
  const[player2Score,setPlayer2Score]=useState(0)
  const[winingScore,setWiningScore]=useState(10)
  const[inputScore,setInputScore]=useState(0)
  const[turn,setTurn]=useState(null)
  const[gameOver,setGameOver]=useState(false)
  const[winner,setWinner]=useState(false)
useEffect(()=>{
const users=['p1','p2']
const randomNum=Math.floor(Math.random()*users.length)
setTurn(users[randomNum])
},[])

const handleInputChange=(evt)=>{
  console.log(evt.target.value)
  setInputScore(evt.target.value)
}
const handleSubmit=()=>{
  
  if(inputScore!==0){
    setWiningScore(+inputScore )
    setInputScore('')
  }else{
    alert('please provide valid number')
  }
}
const handlePlayer1Click=()=>{
  console.log('clicked1')
  // let score=player1Score+1
  const randomNum=Math.ceil(Math.random()*winingScore)
  setPlayer1Score(randomNum)
  // console.log({player1Score,score,winingScore})
  
if(randomNum===winingScore){
  setGameOver(true)
setWinner('p2')
}
  setTurn('p2')
}
const handlePlayer2Click=()=>{
  // let score=player2Score+1
  const randomNum=Math.ceil(Math.random()*winingScore)
  setPlayer2Score(randomNum)
  // console.log({player2Score,score,winingScore})
 
  console.log('clicked2')
  if(randomNum===winingScore){
    setGameOver(true)
    setWinner('p1')
    }
    setTurn('p1')
}
const handleReset=()=>{
  setPlayer1Score(0)
  setPlayer2Score(0)
  setInputScore('')
  setWiningScore(10)
  setGameOver(false)
  setTurn('p2')
  setWinner(null)

}

  return (
    
    <div style={{width:600, margin:'0 auto'}}>
      {gameOver&&<p>{winner+'is the winner'}</p>}
      <h3 align='center'>Player vs Player</h3>
      <p>WiningScore:{winingScore}</p>
      <p>player1:{player1Score}</p>
      <p>playr2:{player2Score}</p>
      <input type='number' value={inputScore} onChange={handleInputChange}/>
      <input type='submit' value='submit' onClick={handleSubmit}/>
      <div>
        <button disabled ={turn==='p2'||gameOver}onClick={handlePlayer1Click}>player 1</button>
        <button disabled={turn==='p1'||gameOver}onClick={handlePlayer2Click}>player 2</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </div>
 );
}

export default App;
