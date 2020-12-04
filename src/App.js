import React, { useEffect, useRef } from 'react';
import './App.scss';
import { SprkButton, SprkStack, SprkStackItem } from '@sparkdesignsystem/spark-react';
import seedFile from './seed.json';

var MarkovChain = require('markovchain');

const App = () => {
  const subtitleRef = useRef(null)
  const outputRef = useRef(null)

  useEffect(() => {
    subtitleRef.current.innerText = generateRandomIsm();
  }, [])

  const generateRandomIsm = () => {
    var seed = seedFile.isms.join(' ');

    var quotes = new MarkovChain(seed);

    var output = quotes
      .start(
        (wordList) => {
          var tmpList = Object.keys(wordList).filter(function (word) {
            return word[0] >= 'A' && word[0] <= 'Z'
          })
          return tmpList[~~(Math.random() * tmpList.length)]
        }
      ).end().process() + ".";

    if (seedFile.isms.includes(output)){
      // this is a dupe; try again
      return generateRandomIsm();
    }

    return output;
  }

  const generateIsmBlock = (sentence_count) => {
    var output = "";

    for (var x = 0; x < sentence_count; x++) {
      output += generateRandomIsm();
      output += " ";
    }

    return output;
  }

  return (
    <main className="sprk-o-CenteredColumn sprk-u-pal">
      <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle" aria-label="Lorem Izm">Lorem Ism</h1>
      <h2 ref={subtitleRef} className="sprk-b-TypeDisplayFive sprk-u-FontStyle--italic sprk-u-mvm">Subtitle</h2>
      <p className="sprk-b-TypeBodyTwo sprk-u-mtl">Tired of pseudo-Latin? Spice up your mockups with this ISM-inspired text generator!</p>
      <p className="sprk-b-TypeBodyTwo sprk-u-mts sprk-u-mbl">
      <a className="sprk-b-Link" href="http://www.sparkdesignsystem.com" target="_blank" rel="noopener">Powered by the Spark Design System.</a></p>
      <hr aria-hidden="true" />
      <SprkStack splitAt="small">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">
          <SprkButton aria-label="Make me an izm" additionalClasses="sprk-u-mrm sprk-u-mbm sprk-c-Button--full@s" onClick={() => {
            outputRef.current.innerText = generateIsmBlock(1);
          }}>Make me an ISM</SprkButton>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">
          <SprkButton additionalClasses="sprk-u-mrm sprk-u-mbm sprk-c-Button--full@s" onClick={() => {
            outputRef.current.innerText = generateIsmBlock(10);
          }}>1 Paragraph</SprkButton>
        </SprkStackItem>
        <SprkStackItem additionalClasses="sprk-o-Stack__item--third@xs">
          <SprkButton additionalClasses="sprk-u-mrm sprk-u-mbm sprk-c-Button--full@s" onClick={() => {
            outputRef.current.innerText = generateIsmBlock(10) + "\n\n" + generateIsmBlock(10) + "\n\n" + generateIsmBlock(10);
          }}>3 Paragraphs</SprkButton></SprkStackItem>
      </SprkStack>

      <p aria-live="polite" ref={outputRef} className="sprk-u-mvl sprk-u-pam outputContainer"></p>
    </main>
  );
}

export default App;
