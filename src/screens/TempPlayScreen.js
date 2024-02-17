// ini buat nyimpen yang 1 3 5 round, gadipake
import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import {Route, IndexRoute} from 'react-router';
import { useNavigation } from '@react-navigation/native';

const choices = ['rock','paper','scissors'];


const TempPlayScreen = ({route}) => {
  const { roundTotal, roundTitle } = route.params;

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [round, setRound] = useState(1);
  
  const [playerFlag, setPlayerFlag] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);

  const [compFlag, setCompFlag] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [allRound, setAllRound] = useState(roundTotal);
  const [roundTitleShow, setRoundTitleShow] = useState(roundTitle);

  const [showModal, setShowModal] = useState(false);
  
  const navigation = useNavigation();

  const generateComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playRound = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    const { roundTotal } = route.params;

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setResult('its a tie');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      setPlayerFlag(playerFlag + 1);
    } else{
      setResult('You Lose:(');
      setCompFlag(compFlag+1);
    }

    if (roundTotal == 1){
      if (playerChoice === computerChoice){
        setResult('It\'s a tie!');
      }
      else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ){
        setPlayerWins(playerWins+1);
        setShowModal(true);

      } else {
        setCompWins(compWins+1);
        setShowModal(true);
      }
    }
    else{
        if (playerFlag + compFlag < roundTotal ) {
          setRound(round + 1);
        }
        else if(Math.max(playerFlag, compFlag) === roundTotal){
          setRound(1);
          if (playerFlag >= compFlag){
            setResult('You win!');
            setPlayerWins(playerWins+1);
          setShowModal(true);
          }
          else if (playerFlag == compFlag){
            setResult('It\'s a tie!');
          }else{
            setResult('Computer win!');
            setCompWins(compWins+1);
          setShowModal(true);
          }
          setCompFlag(0);
          setPlayerFlag(0);
      }
    }
  
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);

    setResult('');
    setShowModal(false);

    setPlayerWins(0);
    setCompWins(0);
  };

  const handleExit = () => {
    navigation.navigate('Home');
    setPlayerWins(0);
    setCompWins(0);
  };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Rock, Paper, Scissors</Text>
    <Text>Yang sampe {roundTotal} duluan menang!</Text>
    <Text>{result}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
      <Button title="Rock" onPress={() => playRound('rock')} />
      <Button title="Paper" onPress={() => playRound('paper')} />
      <Button title="Scissors" onPress={() => playRound('scissors')} />
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
        <Text>Player Wins: {playerWins} // </Text>
        <Text>Computer Wins: {compWins} </Text>

        <Text>=== Player Flag: {playerFlag} // </Text>
        <Text>Computer Flag: {compFlag} </Text>

        <Text>=== Player Choice: {playerChoice} // </Text>
        <Text>Computer Choice: {computerChoice} </Text>
    </View>
 
    <Modal visible={showModal} animationType="slide" transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'green', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text>{result}</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Button title="Play Again" onPress={handlePlayAgain} />
            <Button title="Exit" onPress={handleExit} />
          </View>
        </View>
      </View>
    </Modal>

  </View>
  );
};



export default TempPlayScreen;



