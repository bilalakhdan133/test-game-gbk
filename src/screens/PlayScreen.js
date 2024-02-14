
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';

const choices = ['rock', 'paper', 'scissors'];


const PlayScreen = ({route}) => {
  const { roundTotal } = route.params;

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [round, setRound] = useState(1);
  
  const [playerWins, setPlayerWins] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [allRound, setAllRound] = useState(roundTotal);
  
  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playRound = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    const { roundTotal } = route.params;

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    // ini yang ori

    if (playerChoice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerWins(playerWins + 1);
      // alert('kamu menang!');
    } else {
      setResult('Computer wins!');
      setCompWins(compWins + 1);
      // alert('kamu kalah :(');
    }

    if (round < roundTotal) {
      setRound(round + 1);
    }else{
      setRound(1);
    }
  
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <h1>Yang sampe {allRound} duluan menang! </h1>
    
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
        <p>Computer Wins: {compWins}</p>
      
      </div>
    
    </div>
  );
};



export default PlayScreen;



