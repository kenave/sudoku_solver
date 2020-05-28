import React from 'react';
import Square from './Square'

export default class Row extends React.Component {
  render(){
    return (
      <div className={`row-${this.props.row}`}>
        <Square row={this.props.row} position="0" value="" isSelected="false"/>
        <Square row={this.props.row} position="1" value="" isSelected="false"/>
        <Square row={this.props.row} position="2" value="" isSelected="false"/>
        <Square row={this.props.row} position="3" value="" isSelected="false"/>
        <Square row={this.props.row} position="4" value="" isSelected="false"/>
        <Square row={this.props.row} position="5" value="" isSelected="false"/>
        <Square row={this.props.row} position="6" value="" isSelected="false"/>
        <Square row={this.props.row} position="7" value="" isSelected="false"/>
        <Square row={this.props.row} position="8" value="" isSelected="false"/>
      </div>
    )
  }
}