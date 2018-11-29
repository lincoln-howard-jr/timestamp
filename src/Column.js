import React, {Component, Fragment} from 'react';

export default class Column extends Component {
  constructor (props) {
    super (props);
  }
  addCard () {

  }
  render () {
    return (
      <Fragment>
        <div className="column">
          <div className={`column-name ${this.props.color}`}>
            {this.props.name}
          </div>
          {
            this.props.cards.map ((card, i) => (
              <div className="column-card" key={`${card.name}-${i}`}>
                { this.props.columnIndex > 0 &&
                  <span onClick={this.props.moveCard (this.props.columnIndex, this.props.columnIndex - 1, i)}>{'<'}</span>
                }
                <span>{card}</span>
                { this.props.columnIndex < 3 &&
                  <span onClick={this.props.moveCard (this.props.columnIndex, this.props.columnIndex + 1, i)}>{'>'}</span>
                }
              </div>
            ))
          }
          <div className="column-add-card">
            <span onClick={this.props.addCard}>+ Add a card</span>
          </div>
        </div>
      </Fragment>
    )
  }
}