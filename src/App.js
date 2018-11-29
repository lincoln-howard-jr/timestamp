import React, { Component, Fragment } from 'react';
import Column from './Column';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      columns: [
        {
          name: 'Winnie',
          cards: ['Setup create-react-app', 'Make an App component']
        },
        {
          name: 'Bob',
          cards: ['Make a Column component', 'Make names for people']
        },
        {
          name: 'Thomas',
          cards: ['Make cards', 'Give cards content']
        },
        {
          name: 'George',
          cards: ['Just wondering if you\'re still there', 'I am, working on something']
        }
      ]
    }
  }
  componentDidMount () {
    let state = this.checkLocalStorage ();
    if (state) this.setState (state);
  }
  checkLocalStorage () {
    try {
      let state = JSON.parse (window.localStorage.getItem ('board-state'));
      return state;
    } catch (e) {
      return false;
    }
  }
  saveState () {
    window.localStorage.setItem ('board-state', JSON.stringify (this.state));
  }
  addCard (columnIndex) {
    return () => {
      let columns = Object.assign ({}, this.state.columns);
      let text = window.prompt ('Enter your card text');
      columns [columnIndex].cards.push (text);
      this.setState ({columns}, () => {
        this.saveState ();
      });
    }
  }
  moveCard (columnIndex, toColumnIndex, cardIndex) {
    return () => {
      console.log (this.state);
      let columns = Object.assign ({}, this.state.columns);
      columns [toColumnIndex].cards.push (columns [columnIndex].cards.splice (cardIndex, 1));
      this.setState ({columns}, () => {
        this.saveState ();
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="board">
          <Column moveCard={this.moveCard.bind (this)} {...this.state.columns [0]} color="one" addCard={this.addCard (0)} columnIndex={0} />
          <Column moveCard={this.moveCard.bind (this)} {...this.state.columns [1]} color="two" addCard={this.addCard (1)} columnIndex={1} />
          <Column moveCard={this.moveCard.bind (this)} {...this.state.columns [2]} color="three" addCard={this.addCard (2)} columnIndex={2} />
          <Column moveCard={this.moveCard.bind (this)} {...this.state.columns [3]} color="four" addCard={this.addCard (3)} columnIndex={3} />
        </div>
      </Fragment>
    );
  }
}

export default App;
