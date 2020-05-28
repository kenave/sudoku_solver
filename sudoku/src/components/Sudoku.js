import React from 'react';
import Row from './Row'
// import solver from '../scripts/solver';

export default class Sudoku extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    }
  }

  changeHandler = (row, position, value) => {
    let board = this.state.board
    board[row][position] = value
    // console.log(`new value at row ${row} position ${position}: ${value}`)
    this.setState({
      board: board
    })
  }

  clearSudoku = () => {
    this.setState({
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    })
  }

  render(){
    return (
      <div className="board">
        <Row row="0" data={this.state.board[0]} onChange={this.changeHandler}/>
        <Row row="1" data={this.state.board[1]} onChange={this.changeHandler}/>
        <Row row="2" data={this.state.board[2]} onChange={this.changeHandler}/>
        <Row row="3" data={this.state.board[3]} onChange={this.changeHandler}/>
        <Row row="4" data={this.state.board[4]} onChange={this.changeHandler}/>
        <Row row="5" data={this.state.board[5]} onChange={this.changeHandler}/>
        <Row row="6" data={this.state.board[6]} onChange={this.changeHandler}/>
        <Row row="7" data={this.state.board[7]} onChange={this.changeHandler}/>
        <Row row="8" data={this.state.board[8]} onChange={this.changeHandler}/>
        <div className="button-nav">
          <button className="button">Solve!</button>
          <button className="button" onClick={this.clearSudoku}>Clear</button>
        </div>
      </div>
    )
  }
}