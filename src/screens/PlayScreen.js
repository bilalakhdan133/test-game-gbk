
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';

const choices = ['rock', 'paper', 'scissors'];


const PlayScreen = ({route}) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [round, setRound] = useState(1);
  
  const [playerFlag, setPlayerFlag] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [compFlag, setCompFlag] = useState(0);

  const [showModal, setShowModal] = useState(false);


  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playRound = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    const { roundTotal } = route.params;

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    // while(winCountPlayer != roundTotal || winCountComp != roundTotal){
    //   if (playerChoice === computerChoice) {
    //     setResult('It\'s a tie!');
    //   } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')){
    //     winCountPlayer++;
    //   } else {
    //     winCountComp++;
    //   }
    //   setRound(round + 1);
    // }

    // for (let i = 0; i < roundTotal; i++) {
    //   if (playerChoice === computerChoice) {
    //     setResult('It\'s a tie!');
    //   } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')){
    //     winCountPlayer++;
    //   } else {
    //     winCountComp++;
    //   }
    //   setRound(round + 1);
    // } 
    // if (winCountPlayer > winCountComp){
    //   setResult('You win!');
    //   setPlayerWins(playerWins + 1);
    // }else{
    //   setResult('You lose!');
    // }

    //  for (let i = 0; i < roundTotal; i++) {
    //   if (i < roundTotal){
    //     if (playerChoice === computerChoice) {
    //       setResult('It\'s a tie!');
    //     } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')){
    //       setResult('You win!');
    //       setPlayerFlag(playerFlag + 1);
    //     } else {
    //       setResult('Comp win!');
    //       setCompFlag(compFlag+1);
    //     }
    //     i++;
    //     setRound(round+1);
    //   }else{
    //     setRound(1);
    //   }
    // } 
  
    if (playerChoice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerFlag(playerFlag + 1);
    } else {
      setResult('Computer wins!');
      setCompFlag(compFlag+1);
    }

    if (roundTotal == 1){
      if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ){
        setPlayerWins(playerWins+1);
        setCompFlag(0);
        setPlayerFlag(0);
        alert('You Win!');
        setShowModal(true);
      } else {
        setCompFlag(0);
        setPlayerFlag(0);
        alert('You Lose :(');
        setShowModal(true);
      }
    }
    
    if (playerFlag + compFlag < roundTotal) {
      setRound(round + 1);
    }
    else if(playerFlag == roundTotal-1 || compFlag == roundTotal-1){
      setRound(1);
      if (playerFlag > compFlag){
        setPlayerWins(playerWins+1);
        setCompFlag(0);
        setPlayerFlag(0);
        alert('You Win!');
        setShowModal(true);
      }else{
        setCompFlag(0);
        setPlayerFlag(0);
        alert('You Lose :(');
        setShowModal(true);
      }


    }

    // ini yang ori

    // if (playerChoice === computerChoice) {
    //   setResult('It\'s a tie!');
    // } else if (
    //   (playerChoice === 'rock' && computerChoice === 'scissors') ||
    //   (playerChoice === 'paper' && computerChoice === 'rock') ||
    //   (playerChoice === 'scissors' && computerChoice === 'paper')
    // ) {
    //   setResult('You win!');
    //   setPlayerFlag(playerFlag + 1);
    // } else {
    //   setResult('Computer wins!');
    // }

    // if (round < roundTotal) {
    //   setRound(round + 1);
    // }else{
    //   setRound(1);
    // }
  
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <h1>Main berapa round</h1>
      {/* <h2>Round {round}</h2> */}
    
      <div>
        <button onClick={() => playRound('rock')}>Rock</button>
        <button onClick={() => playRound('paper')}>Paper</button>
        <button onClick={() => playRound('scissors')}>Scissors</button>
      </div>
      <div>
        {playerChoice && (
          <p>You chose: {playerChoice}</p>
        )}
        {computerChoice && (
          <p>Computer chose: {computerChoice}</p>
        )}
        <p>{result}</p>
        <p>Player Wins: {playerWins}</p>
        <p>Player Flag: {playerFlag}</p>
        <p>Computer Flag: {compFlag}</p>
      
      </div>
    
    </div>
  );
};



export default PlayScreen;



