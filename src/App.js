import React, { Component } from 'react';
import './App.scss';
import IconSet from './components/IconSet/IconSet';
import { SprkButton } from '@sparkdesignsystem/spark-react';
import seedFile from './seed.json';

var MarkovChain = require('markovchain');

class App extends Component {
  constructor(props) {
    super(props);

    this.subtitleRef = React.createRef();
    this.outputRef = React.createRef();

    this.generateRandomIsm = this.generateRandomIsm.bind(this);
    this.generateIsmBlock = this.generateIsmBlock.bind(this);
  }

  componentDidMount() {
    this.subtitleRef.current.innerText = this.generateRandomIsm();
  }

  generateRandomIsm() {
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

    console.log(output);
    return (output);
  }

  generateIsmBlock(sentence_count){
    var output = "";

    for (var x = 0; x < sentence_count; x++){
      output += this.generateRandomIsm();
      output += " ";
    }

    return output;
  }

  render() {
    return (
      <main className="sprk-o-CenteredColumn sprk-u-ptl">
        <IconSet></IconSet>
        <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle">Lorem Ism</h1>
        <h1 ref={this.subtitleRef} className="sprk-b-TypeDisplaySix sprk-u-mtl">Random ism here</h1>
        <hr />
        <SprkButton additionalClasses="sprk-u-mrm" onClick={() => {
          this.outputRef.current.innerText = this.generateIsmBlock(1);
        }}>Make me an ISM</SprkButton>
        <SprkButton additionalClasses="sprk-u-mrm" onClick={() => {
          this.outputRef.current.innerText = this.generateIsmBlock(10);
        }}>A paragraph</SprkButton>
        <SprkButton additionalClasses="sprk-u-mrm" onClick={() => {
          this.outputRef.current.innerText = this.generateIsmBlock(10) + "\n\n" + this.generateIsmBlock(10) + "\n\n" + this.generateIsmBlock(10);
        }}>3 paragraphs</SprkButton>
        <p ref={this.outputRef} className="sprk-u-pvl">output goes here</p>
      </main>
    );
  }
}

export default App;
