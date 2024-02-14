// ini buat nyimpen yang 1 3 5 round, gadipake
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';

const choices = ['rock', 'paper', 'scissors'];


const TempPlayScreen = ({route}) => {
  const { roundTotal } = route.params;

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [round, setRound] = useState(1);
  
  const [playerFlag, setPlayerFlag] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);

  const [compFlag, setCompFlag] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [allRound, setAllRound] = useState(roundTotal);
  const [showModal, setShowModal] = useState(false);
  
  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playRound = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    const { roundTotal } = route.params;

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerFlag(playerFlag + 1);
    } else{
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
        // alert('You Win!');
        setShowModal(true);
      } else {
        setCompWins(compWins+1);
        setCompFlag(0);
        setPlayerFlag(0);
        // alert('You Lose :(');
        setShowModal(true);
      }
    }
    else{
      if (playerFlag + compFlag < roundTotal ) {
        setRound(round + 1);
      }
      else if(playerFlag <= roundTotal || compFlag <=  roundTotal){
        setRound(1);
        if (playerFlag > compFlag){
          setPlayerWins(playerWins+1);
          setCompFlag(0);
          setPlayerFlag(0);
          // alert('You Win!');
          setShowModal(true);
        }else{
          setCompWins(compWins+1);
          setCompFlag(0);
          setPlayerFlag(0);
          // alert('You Lose :(');
          setShowModal(true);
        }
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
      <h1>Yang sampe {allRound} duluan menang! </h1>
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
        <p>Computer Wins: {compWins}</p>

      
        <p>Player Flag: {playerFlag}</p>
        <p>Computer Flag: {compFlag}</p>
      
      </div>
    
    </div>
  );
};



export default TempPlayScreen;



