import React from 'react';
import Square from './Square'

export default class Row extends React.Component {
  render(){
    return (
      <div className={`row-${this.props.row}`}>
        <Square row={this.props.row} position="0" value={this.props.data[0]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="1" value={this.props.data[1]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="2" value={this.props.data[2]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="3" value={this.props.data[3]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="4" value={this.props.data[4]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="5" value={this.props.data[5]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="6" value={this.props.data[6]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="7" value={this.props.data[7]} isSelected="false" onChange={this.props.onChange}/>
        <Square row={this.props.row} position="8" value={this.props.data[8]} isSelected="false" onChange={this.props.onChange}/>
      </div>
    )
  }
}