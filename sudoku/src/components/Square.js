import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.numInput = React.createRef()
    this.state = {
      row: props.row,
      position: props.position,
      value: props.value,
      isSelected: props.isSelected
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.focusNumInput = this.focusNumInput.bind(this)
  }

  focusNumInput() {
    this.numInput.current.focus()
  }

  handleInputChange(e){
    const newValue = e.target.value
    if (((newValue > 0 && newValue < 10) && newValue !== ' ') || newValue === '') {
      this.setState({value: e.target.value}) // set value of square
      if (this.props.position >= 8) {
        if(this.props.row >= 8) return // stop if we're at the last square on the last row
        this.numInput.current.parentNode.nextSibling.childNodes[0].focus() // focus first square in next row
      } else {
        this.numInput.current.nextSibling.focus() // focus next square
      }
    }
  }

  render(){
    return (
    <input 
      className="square"
      ref={this.numInput}
      value={this.state.value}
      onChange={this.handleInputChange}
      onFocus={() => this.setState({isSelected: true})}
      onBlur={() => this.setState({isSelected: false})}
      >
    </input>
    )
  }
}