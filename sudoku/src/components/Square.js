import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      row: props.row,
      position: props.position,
      value: props.value,
      isSelected: props.isSelected
    }
  }

  handleInputChange = (e) => {
    const newValue = e.target.value
    if (((newValue > 0 && newValue < 10) && newValue !== ' ') || newValue === '') {
      this.setState({value: e.target.value}) // set value of square
      if (this.props.position >= 8) {
        if (this.props.row >= 8) return // stop if we're at the last square on the last row
        this.inputRef.current.parentNode.nextSibling.childNodes[0].focus() // focus first square in next row
      } else {
        this.inputRef.current.nextSibling.focus() // focus next square
      }
    }
  }

  render(){
    return (
    <input 
      className="square"
      ref={this.inputRef}
      value={this.state.value}
      onChange={this.handleInputChange}
      onFocus={() => this.setState({isSelected: true})}
      onBlur={() => this.setState({isSelected: false})}
      >
    </input>
    )
  }
}