import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      value: props.value || '',
      isSelected: props.isSelected
    }
  }

  clear = () => {
    this.setState({
      value: ''
    })
  }

  handleInputChange = (e) => {
    const newValue = e.target.value
    if (((newValue > 0 && newValue < 10) && newValue !== ' ') || newValue === '') {
      console.log(this.props)
      this.props.onChange(this.props.row, this.props.position, e.target.value) // not sure why this doesn't update the square's value?
      this.setState({value: e.target.value}) // set value of square
      if (newValue === '') return // don't focus next square after deleting an existing square
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
      // value={this.props.value || ''}
      value={this.props.value || ''}
      onChange={this.handleInputChange}
      onFocus={() => this.setState({isSelected: true})}
      onBlur={() => this.setState({isSelected: false})}
      >
    </input>
    )
  }
}